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
    	GooglePlus.logout().then(function() {
    		GooglePlus.getUser().then(function(user) {
    			console.log('LO:', user);

    		}, function(err) {
    			console.log('no user');
    		});
     		$scope.$broadcast('LOGGED_OUT',$scope.user );
        }, function(err) {
            console.log(err);
        });
    }
}

angular
    .module('linked-learning')
    .controller('CookieControl', ['$scope', '$cookies', '$cookieStore', CookieCTRL]);

function CookieCTRL($scope, $cookies, $cookieStore) {
    $scope.myFruit = 'Banana';
    $scope.name = 'NOT LOGGED IN';

    // if ($cookieStore.get('fruit'))
    // 	$scope.myFruit = $cookieStore.get('fruit');
    if ($cookies.fruit)
        $scope.myFruit = $cookieStore.get('fruit');

    if ($cookies.name)
    	$scope.name = $cookieStore.get('name');

    //$cookieStore.remove('fruit');

    $scope.$on('LOGGED_IN_WITH_GOOGLE', function(event, userData) {
        $scope.curtime = new Date();
        //$cookiestore.put('TEST', 'TO EXPIRE', {expires: new Date($scope.curtime.getTime() + 1.5*60000)});
        $scope.user = userData;

        $cookieStore.put('fruit', 'Apple');
        $cookieStore.put('flower', 'Rose');
        $cookieStore.put('name', $scope.user.name);

        $scope.myFruit = $cookieStore.get('fruit');
        
        $scope.name = $cookieStore.get('name');
        //$scope.name = $cookies.name;
    });

    $scope.$on('LOGGED_OUT', function(event, data) {
        $cookieStore.remove('name');
        $cookieStore.remove('fruit');
        $cookieStore.remove('flower');
        console.log('Logging Out', data);
    });
}
