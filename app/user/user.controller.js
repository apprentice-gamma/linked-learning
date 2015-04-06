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
    }

angular
	.module('linked-learning')
	.controller('CookieControl', ['$scope', '$cookies','$cookieStore', CookieCTRL]);

	function CookieCTRL($scope, $cookies, $cookieStore) {
		$scope.myFruit = 'Banana';
		$scope.name = 'NOT LOGGED IN';

		$scope.$on('LOGGED_IN_WITH_GOOGLE', function(event, data) {
			$scope.user = data;

			$cookies.userName = $scope.user.name;
	  		$scope.platformCookie = $cookies.userName;
	  		$cookieStore.put('fruit','Apple');
	  		$cookieStore.put('flower','Rose');
			$cookieStore.put('name', $scope.user.name);
	  		$scope.myFruit= $cookieStore.get('fruit');
	  		$scope.name = $cookieStore.get('name');
		});
	}