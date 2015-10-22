from django.shortcuts import render
# Create your views here.

def index(request):
    return render(request, 'monitoring/base.html')

def search_form(request):
    return render(request, 'search_form.html')

def search_results(request):
    return render(request, 'search_results.html')

def decision_edit(request):
    return render(request, 'decision_edit.html')