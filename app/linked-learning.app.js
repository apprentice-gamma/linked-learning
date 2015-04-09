angular.module('linked-learning', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'googleplus']);
angular.module('linked-learning').config(Configuration);


function Configuration($routeProvider, GooglePlusProvider) {
    var home = '/';
    $routeProvider
        .when(home, {
            templateUrl: 'templates/view-listings.html',
        })
        .when('/:bookmarkURL*', {
            templateUrl: 'templates/view-bookmark.html',
        })
        .otherwise({
            redirectTo: home,
        });
}