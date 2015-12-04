"""monitoring URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'monitor.views.index', name='index'),
    url(r'^search_form$', 'monitor.views.search_form', name='search_form'),
    url(r'^django_search_results$',
        'monitor.views.search_results', name='search_results'),
    url(r'^django_decision_edit$',
        'monitor.views.decision_edit', name='decision_edit'),
    url(r'^json$', 'monitor.views.decisions_get', name='json'),
]
