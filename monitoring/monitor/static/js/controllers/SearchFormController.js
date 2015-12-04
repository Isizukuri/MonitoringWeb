app.controller('SearchFormController', ['$scope','$rootScope', '$location', 'decisionsService', function($scope, $rootScope, $location, decisionsService) {
    $scope.showResults = function() {
    	parameters = {
    		start_date: this.search_input.start_date,
    		end_date: this.search_input.end_date,
    		key_words: this.search_input.key_words,
    		courts: [this.search_input.court_select_1, this.search_input.court_select_2, this.search_input.court_select_3]
    	};

        decisionsService.getDecisions('/json', parameters).success(function(data) {
            $rootScope.dec = data;
            $rootScope.l = $rootScope.dec.length;
            $location.path('/search_results/');
        });
    };
}])