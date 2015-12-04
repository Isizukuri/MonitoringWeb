#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json as Json
import requests
import time
from datetime import datetime
from urlparse import urljoin

from django.http import JsonResponse
from django.shortcuts import render

from bs4 import BeautifulSoup as BS
# Create your views here.


def index(request):
    return render(request, 'monitoring/base.html')


def search_form(request):
    return render(request, 'search_form.html')


def search_results(request):
    return render(request, 'search_results.html')


def decision_edit(request):
    return render(request, 'decision_edit.html')


def decisions_get(request):
    if request.method == 'POST':

        data = Json.loads(request.body)

        url = 'http://www.reyestr.court.gov.ua/'
        court_region = 18
        default_keyword = [u'дитин*', u'дітей', u'дитяч*', u'*літн*',
                           u'неповнолітн*', u'малолітн*', u'батьківськ*', u'усиновл*', u'освіт*',
                           u'оздоров*', u'навчальн*']

        start_date = datetime.strptime(
            data['start_date'].split('T', 1)[0], "%Y-%m-%d")
        end_date = datetime.strptime(
            data['end_date'].split('T', 1)[0], "%Y-%m-%d")
        key_words = data.get('key_words')
        courts = data['courts']

        search_parameters = {'SearchExpression': u'прокуратура',
                             'CourtRegion[]': court_region,
                             'CourtName[]': courts[0],
                             'RegDateBegin': datetime.strftime(start_date, "%d.%m.%Y"),
                             'RegDateEnd': datetime.strftime(end_date, "%d.%m.%Y"),
                             'VRType[]': '2',
                             'VRType[]': '3',
                             'VRType[]': '5',
                             'PagingInfo.ItemsPerPage': '100',
                             'Liga': 'false'}

        edr_response = requests.post(url, search_parameters)

        soup = BS(edr_response.text)
        results_table = soup.find('table', id='tableresult')
        if results_table:
            rows = results_table.findAll('tr')[1:]

        results = []

        i = 1
        for row in rows:
            decision = {}
            decision['id'] = rows.index(row)
            decision['case_number'] = row.find(
                'td', {"class": "CaseNumber tr" + str(i)}).text
            decision['decision_form'] = row.find(
                'td', {"class": "CSType tr" + str(i)}).text
            decision['adoption_date'] = row.find(
                'td', {"class": "RegDate tr" + str(i)}).text
            decision['force_entry_date'] = row.find(
                'td', {"class": "LawDate tr" + str(i)}).text
            decision['court_name'] = row.find(
                'td', {"class": "CourtName tr" + str(i)}).text
            decision['judicial_form'] = row.find(
                'td', {"class": "CSType tr" + str(i)}).text
            decision['decision_form'] = row.find(
                'td', {"class": "VRType tr" + str(i)}).text
            decision['claimants'] = ['']
            decision['defendatns'] = ['']
            decision['third_parties'] = ['']
            link = row.find('td').a['href']
            child_page = BS(requests.get(urljoin(url, link)).text)
            if child_page.body.find('body'):
                decision['text'] = child_page.body.find(
                    'body').text
            results.append(decision)
            if i == 1:
                i += 1
            else:
                i = 1
            time.sleep(1)

        return JsonResponse(results, safe=False)
