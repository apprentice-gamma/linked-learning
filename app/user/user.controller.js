angular
    .module('linked-learning')
    .controller('AuthCtrl', ['$scope', 'GooglePlus', GoogleCTRL]);

function GoogleCTRL($scope, GooglePlus) {
    $scope.user = {};

    $scope.login = function() {
        GooglePlus.login().then(function(authResult) {
            console.log(authResult);

            GooglePlus.getUser().then(function(user) {
                console.log(user);
                $scope.user = user;
                $scope.$broadcast('LOGGED_IN_WITH_GOOGLE', user);
            });
        }, function(err) {
            console.log(err);
        });
    };
    $scope.logout = logout;

    function logout() {
        console.log("LOGOUT STAGE 1: COOKIES");
        $scope.$broadcast('LOGGED_OUT', $scope.user);
    	GooglePlus.logout().then(function() {
    		GooglePlus.getUser().then(function(user) {
                console.log("LOGOUT STAGE 2: GOOGLE");
    		}, function(err) {
    			console.log('no user');
    		});
        }, function(err) {
            console.log(err);
        });
    }
}

angular
    .module('linked-learning')
    .controller('CookieControl', ['$scope', '$cookies', '$cookieStore', CookieCTRL]);

function CookieCTRL($scope, $cookies, $cookieStore) {
    $scope.name = 'NOT LOGGED IN';
    $scope.modalShown = true;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

    if ($cookieStore.get('name') !== undefined ) {
        $scope.toggleModal();
    	$scope.name = $cookieStore.get('name');
    }

    $scope.$on('LOGGED_IN_WITH_GOOGLE', function(event, userData) {
        $scope.user = userData;
        $scope.modalShown = false;

        $cookieStore.put('name', $scope.user.name);
        $scope.name = $cookieStore.get('name');
    });

    $scope.$on('LOGGED_OUT', function(event, data) {
        console.log("LOGGING OUT");
        $scope.modalShown = true;
        $cookieStore.remove('name');
    });
}
