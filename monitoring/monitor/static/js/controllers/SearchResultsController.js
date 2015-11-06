app.controller('SearchResultsController', ['$scope', '$rootScope', '$location', '$routeParams', 'decisionsService', 'decisionsGetService', function($scope, $rootScope, $location, $routeParams, decisionsService, decisionsGetService) {

    decisionsGetService.success(function(data) {
        $rootScope.dec = data;
    });

    $scope.decisions = decisionsService.list();


    $scope.showDecision = function(index, page) {
        $location.path('/decision/' + index);

    };

    $scope.flag = decisionsService.check();

}])