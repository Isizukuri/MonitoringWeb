app.factory('decisionsService', ['$rootScope', '$http', function($rootScope, $http) {

    var decisionsServ = {};

    decisionsServ.getDecisions = function() {
        return $http.get('/json')
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