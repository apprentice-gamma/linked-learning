angular.module('linked-learning', ['ngRoute', 'googleplus']);
angular.module('linked-learning').config(Configuration);

function Configuration($routeProvider, GooglePlusProvider) {
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

    GooglePlusProvider.init({
           clientId: '321395475453-f1iqbdeui513m8fi8ctkar5icg40644j.apps.googleusercontent.com',
           apiKey: 'AIzaSyDLM0BzM_-HXaQhCEQxogLFAw3z4jM--3w'
         });
}