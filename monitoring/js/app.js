var app = angular.module('MonitoringApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'templates/search_form.html' 
    }) 
  	.when('/search_results', { 
      templateUrl: 'templates/search_results.html' 
    })
    .when('/outbox/:id', { 
      templateUrl: 'templates/decision_edit.html' 
    }) 
    .when('/final_results', { 
      templateUrl: 'templates/final_results.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});