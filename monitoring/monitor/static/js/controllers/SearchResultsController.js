app.controller('SearchResultsController', ['$scope', '$rootScope', '$location', '$routeParams', 'decisionsService', function($scope, $rootScope, $location, $routeParams, decisionsService) {

    $scope.decisions = decisionsService.list();


    $scope.showDecision = function(index, page) {
        $location.path('/decision/' + index);

    };

    $scope.flag = decisionsService.check();

}])