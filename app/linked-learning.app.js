angular.module('linked-learning', ['ngRoute']);
angular.module('linked-learning').config(Configuration);

function Configuration($routeProvider) {
	$routeProvider
  // route for the home page
    .when('/', {
        templateUrl : 'templates/view-listings.html',
    })
    .when('/:bookmarkURL', {
        templateUrl : 'templates/view-bookmark.html',

    })
    .otherwise({
        redirectTo: '/',
    });
}