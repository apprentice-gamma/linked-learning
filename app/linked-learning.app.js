angular.module('linked-learning', ['ngRoute']);
angular.module('linked-learning').config(Configuration);

function Configuration($routeProvider) {
	$routeProvider
  // route for the home page
    .when('/', {
        templateUrl : 'templates/viewListings.html',
        controller  : 'mainController'
    })

    // route for the about page
    .when('/bookmark', {
        templateUrl : 'templates/viewBookmark.html',
        controller  : 'aboutController'
    })

    // route for the contact page
    .when('/comment', {
        templateUrl : 'templates/viewComments.html',
        controller  : 'contactController'
    });
}