var app = angular.module('MonitoringApp', ['ngRoute', 'mgcrea.ngStrap', 'angularUtils.directives.dirPagination', 'ngAnimate']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/search_form', { 
      templateUrl: 'search_form',
      controller: 'SearchFormController' 
    }) 
  	.when('/search_results', { 
      templateUrl: 'django_search_results',
      controller: 'SearchResultsController' 
    })
    .when('/decision/:decision', { 
      templateUrl: 'django_decision_edit',
      controller: 'DecisionEditController'  
    }) 
    .when('/final_results', { 
      templateUrl: 'final_results' 
    }) 
    .otherwise({ 
      redirectTo: '/search_form' 
    }); 
});

app.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd.MM.yyyy'   
  });
});

app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});
