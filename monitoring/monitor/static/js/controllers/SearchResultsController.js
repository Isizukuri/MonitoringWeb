app.controller('SearchResultsController', ['$scope', '$location', '$routeParams', 'decisionsService', function($scope, $location, $routeParams, decisionsService) {

    $scope.decisions = decisionsService.list;

    
    $scope.showDecision = function(index) {
        $location.path('/decision/' + index);
    };

    $scope.flag = decisionsService.check();

}])
