app.controller('SearchResultsController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.decisions = [{
            decision_form: 'Рішення',
            adoption_date: '01.01.2012',
            force_entry_date: '10.01.2012',
            judicial_form: 'Цивільне',
            case_number: '1',
            court_name: 'Рівненський апеляційний суд',
            text: 'Lorem ipsum Nisi voluptate ut culpa exercitation.',
            competence: '',
            claimant: '',
            defendant: '',
            third_party: '',
            claim_subject: '',
            material: '',
            case_price: '',
            ground: '',
            ground_square: '',
            legality: '',
            appealable: '',
            complete: 'True'
        },

        {
            decision_form: 'Постанова',
            adoption_date: '02.02.2013',
            force_entry_date: '12.02.2013',
            judicial_form: 'Адміністративне',
            case_number: '2',
            court_name: 'Рівненський окружний адміністративний суд',
            text: 'Lorem ipsum Nisi voluptate ut culpa exercitation.',
            competence: '',
            claimant: '',
            defendant: '',
            third_party: '',
            claim_subject: '',
            material: '',
            case_price: '',
            ground: '',
            ground_square: '',
            legality: '',
            appealable: '',
            complete: ''
        },

        {
            decision_form: 'Ухвала',
            adoption_date: '03.03.2014',
            force_entry_date: '13.03.2014',
            judicial_form: 'Господарське',
            case_number: '3',
            court_name: 'Рівненський апеляційний господарський суд',
            text: 'Lorem ipsum Nisi voluptate ut culpa exercitation.',
            competence: '',
            claimant: '',
            defendant: '',
            third_party: '',
            claim_subject: '',
            material: '',
            case_price: '',
            ground: '',
            ground_square: '',
            legality: '',
            appealable: '',
            complete: 'False'
        },
    ];
    $scope.dec = $scope.decisions[$routeParams.decision];
    $scope.go = function(path) {
        $location.path(path);
    };
}])