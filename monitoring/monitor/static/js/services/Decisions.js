app.factory('decisionsService', function() {
    var decisions = [{
            decision_form: 'Рішення',
            adoption_date: '01.01.2012',
            force_entry_date: '10.01.2012',
            judicial_form: 'Цивільне',
            case_number: '1',
            court_name: 'Рівненський апеляційний суд',
            text: 'Lorem ipsum Nisi voluptate ut culpa exercitation.',
            competence: '',
            claimants: ['',],
            defendants: ['',],
            third_parties: ['',],
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
            decision_form: 'Постанова',
            adoption_date: '02.02.2013',
            force_entry_date: '12.02.2013',
            judicial_form: 'Адміністративне',
            case_number: '2',
            court_name: 'Рівненський окружний адміністративний суд',
            text: 'Lorem ipsum Nisi voluptate ut culpa exercitation.',
            competence: '',
            claimants: ['',],
            defendants: ['',],
            third_parties: ['',],
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
            claimants: ['',],
            defendants: ['',],
            third_parties: ['',],
            claim_subject: '',
            material: '',
            case_price: '',
            ground: '',
            ground_square: '',
            legality: '',
            appealable: '',
            complete: ''
        },
    ];

    var decisionsServ = {};

    var l = decisions.length;

    decisionsServ.update = function(index, complete, decision) {
        if (decision.complete != complete && complete === true) {l -= 1}
        else if (decision.complete != complete && complete != true) {l += 1}; 
        decision.complete = complete;
        decisions[index] = decision;
    };

    decisionsServ.list = function() {
        return decisions;
    };

    decisionsServ.check = function() {
        return l;
    };

    return decisionsServ;
});
