app.controller('SearchResultsController', ['$scope', '$routeParams', 'decisionsService', function($scope, $routeParams, decisionsService) {
    
    $scope.decisions = decisionsService.list;

    
    
    $scope.go = function(path) {
        $location.path(path);
    };

    
}])