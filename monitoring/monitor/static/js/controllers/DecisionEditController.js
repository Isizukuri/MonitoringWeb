app.controller('DecisionEditController', ['$scope', '$routeParams', 'decisionsService', function($scope, $routeParams, decisionsService) {

    $scope.decisions = decisionsService.list();

    $scope.dec = $scope.decisions[$routeParams.decision];

    $scope.ind = $routeParams.decision;

    $scope.update = decisionsService.update;

    $scope.claimant_index = $scope.dec.claimants.length;

    $scope.add_claimant = function() {
        $scope.dec.claimants.push('');
    };

    $scope.add_defendant = function() {
        $scope.dec.defendants.push('');
    };

    $scope.add_third_party = function() {
        $scope.dec.third_parties.push('');
    };

}])