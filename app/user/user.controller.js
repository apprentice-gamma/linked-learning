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