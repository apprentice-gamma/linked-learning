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
    .controller('CookieControl', CookieCTRL);

function CookieCTRL($scope, $cookies, $cookieStore, UserFactory) {
    $scope.modalShown = true;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

    if ($cookieStore.get('name') !== undefined ) {
        $scope.toggleModal();
        UserFactory.id = $cookieStore.get('id');
        UserFactory.name = $cookieStore.get('name');
        UserFactory.picture = $cookieStore.get('picture');
    }

    $scope.$on('LOGGED_IN_WITH_GOOGLE', function(event, userData) {
        $scope.user = userData;
        $scope.modalShown = false;

        $cookieStore.put('id', $scope.user.id);
        $cookieStore.put('name', $scope.user.name);
        $cookieStore.put('picture', $scope.user.picture);
        UserFactory.id = $cookieStore.get('id');
        UserFactory.name = $cookieStore.get('name');
        UserFactory.picture = $cookieStore.get('picture');
    });

    $scope.$on('LOGGED_OUT', function(event, data) {
        console.log("LOGGING OUT");
        $scope.modalShown = true;
        $cookieStore.remove('id');
        $cookieStore.remove('name');
        $cookieStore.remove('picture');
    });
}
