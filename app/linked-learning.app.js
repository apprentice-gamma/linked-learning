angular.module('linked-learning', ['ngRoute',  'ngCookies', 'ui.bootstrap', 'googleplus']);
angular.module('linked-learning').config(Configuration);


function Configuration($routeProvider, GooglePlusProvider) {
    var home = '/';
	$routeProvider
    .when(home, {
        templateUrl : 'templates/view-listings.html',
    })
    .when('/:bookmarkURL*', {
        templateUrl : 'templates/view-bookmark.html',
    })
    .otherwise({
        redirectTo: home,
    });

    GooglePlusProvider.init({
           clientId: '321395475453-f1iqbdeui513m8fi8ctkar5icg40644j.apps.googleusercontent.com',
           apiKey: 'AIzaSyDLM0BzM_-HXaQhCEQxogLFAw3z4jM--3w'
    });
}
