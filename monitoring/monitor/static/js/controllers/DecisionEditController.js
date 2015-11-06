app.controller('DecisionEditController', ['$scope', '$rootScope', '$routeParams', 'decisionsService', function($scope, $rootScope, $routeParams, decisionsService) {

    $scope.decisions = decisionsService.list();

    $scope.dec = $scope.decisions[$routeParams.decision];

    $scope.ind = $routeParams.decision;

    $scope.update = decisionsService.update;

    $scope.claimant_index = $scope.dec.claimants.length;

    $scope.add_claimant = function() {
        $scope.dec.claimants.push('');
    };

    $scope.del_claimant = function(index, howmany) {
        $scope.dec.claimants.splice(index, howmany);
    }

    $scope.add_defendant = function() {
        $scope.dec.defendants.push('');
    };

    $scope.del_defendant = function(index, howmany) {
        $scope.dec.defendants.splice(index, howmany);
    };

    $scope.add_third_party = function() {
        $scope.dec.third_parties.push('');
    };

    $scope.del_third_party = function(index, howmany) {
        $scope.dec.third_parties.splice(index, howmany);
    };
}])