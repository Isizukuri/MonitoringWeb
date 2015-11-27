app.factory('decisionsService', ['$rootScope', '$http', function($rootScope, $http) {

    var decisionsServ = {};

    decisionsServ.getDecisions = function(url, start_date, end_date, courts, key_words) {
        return $http.post(url, {'start_date': start_date, 'end_date': end_date, 'courts': courts, 'key_words': key_words})
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
    };

    
    decisionsServ.update = function(index, complete, decision) {
        if (decision.complete != complete && complete === true) {
            $rootScope.l -= 1
        } else if (decision.complete != complete && complete != true) {
            $rootScope.l += 1
        };
        decision.complete = complete;
        $rootScope.dec[index] = decision;
    };

    decisionsServ.list = function() {
        return $rootScope.dec;
    };

    decisionsServ.check = function() {
        return $rootScope.l;
    };

    return decisionsServ;
}]);