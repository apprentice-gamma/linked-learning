angular
	.module('linked-learning')
	.controller('AuthCtrl', ['$scope', 'GooglePlus', function($scope, GooglePlus) {
			$scope.user = {};
			
            $scope.login = function() {
                GooglePlus.login().then(function(authResult) {
                    console.log(authResult);

                    GooglePlus.getUser().then(function(user) {
                        console.log(user);
                        $scope.user = user;
                    });
                }, function(err) {
                    console.log(err);
                });
            };
        }]);

angular
	.module('linked-learning')
	.controller('CookieControl', ['$scope', '$cookies','$cookieStore', CookieCTRL]);

	function CookieCTRL($scope, $cookies, $cookieStore) {
		$cookies.userName = 'Sandeep';
  		$scope.platformCookie = $cookies.userName;
  		$cookieStore.put('fruit','Apple');
  		$cookieStore.put('flower','Rose');
  		$scope.myFruit= $cookieStore.get('fruit');
	}