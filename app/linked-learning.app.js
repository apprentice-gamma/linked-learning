angular.module('linked-learning', ['ngRoute']);
angular.module('linked-learning').config(Configuration);
angular.module('linked-learning').factory(BookmarkFactory);

function BookmarkFactory() {
    var fac = {};
    
    fac.bookmarks = [];

    return bookmarks;
}

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

