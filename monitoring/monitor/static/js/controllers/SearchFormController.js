app.controller('SearchFormController', ['$scope', '$rootScope', '$location', 'decisionsService', function($scope, $rootScope, $location, decisionsService) {

    $scope.showResults = function() {
        
        decisionsService.getDecisions().success(function(data) {
            $rootScope.dec = data;
            $rootScope.l = $rootScope.dec.length;
        });

        $location.path('/search_results/');
    };
}])