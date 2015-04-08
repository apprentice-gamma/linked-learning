angular
    .module('linked-learning')
    .controller('AuthCtrl', GoogleCTRL);

function GoogleCTRL($scope, GooglePlus) {
    var vm = this;

    vm.user = {};
    vm.login = login;
    vm.logout = logout;

    function login () {
        GooglePlus.login().then(function(authResult) {
            console.log(authResult);

            GooglePlus.getUser().then(function(user) {
                console.log(user);
                vm.user = user;
                $scope.$broadcast('LOGGED_IN_WITH_GOOGLE', user);
            });
        }, function(err) {
            console.log(err);
        });
    }

    function logout() {
        console.log("LOGOUT STAGE 1: COOKIES");
        $scope.$broadcast('LOGGED_OUT', vm.user);
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
	var vm = this;
	vm.modalShown = true;
    vm.toggleModal = function() {
        vm.modalShown = !vm.modalShown;
    };
    console.log('PRE COOKIE CHECK');
    if ($cookieStore.get('name') !== undefined ) {
    	console.log('HAS COOKIES NOM NOM');
        vm.toggleModal();
        UserFactory.id = $cookieStore.get('id');
        UserFactory.name = $cookieStore.get('name');
        UserFactory.picture = $cookieStore.get('picture');
    } else {
    	console.log("NO COOKIES SAD FACE");
    }

    $scope.$on('LOGGED_IN_WITH_GOOGLE', function(event, userData) {
        vm.user = userData;
        vm.modalShown = false;

        $cookieStore.put('id', vm.user.id);
        $cookieStore.put('name', vm.user.name);
        $cookieStore.put('picture', vm.user.picture);
        UserFactory.id = $cookieStore.get('id');
        UserFactory.name = $cookieStore.get('name');
        UserFactory.picture = $cookieStore.get('picture');
    });

    $scope.$on('LOGGED_OUT', function(event, data) {
        console.log("LOGGING OUT");
        vm.modalShown = true;
        $cookieStore.remove('id');
        $cookieStore.remove('name');
        $cookieStore.remove('picture');
    });
}
