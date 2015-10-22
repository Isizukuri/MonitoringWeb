var app = angular.module('MonitoringApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'search_form' 
    }) 
  	.when('/search_results', { 
      templateUrl: 'django_search_results' 
    })
    .when('/decision_edit', { 
      templateUrl: 'django_decision_edit' 
    }) 
    .when('/final_results', { 
      templateUrl: 'final_results' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});