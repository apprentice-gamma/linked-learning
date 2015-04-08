angular.module('linked-learning', ['ngRoute',  'ngCookies', 'ui.bootstrap', 'googleplus']);
angular.module('linked-learning').config(Configuration);
angular.module('linked-learning').factory('BookmarkFactory', BookmarkFactory);

function BookmarkFactory($http) {
    var url = 'https://project1-backend.herokuapp.com/api/bookmarks';
    var factory = {};
    factory.getBookmarks = function(){
      return $http.get(url);
    };
    factory.addBookmark = function(bookmark){
        return $http.post(url, bookmark);
    };
    factory.addComment = function(bookmark, comment){
            return $http.post(url + '/' + bookmark._id+ '/' + 'comments', comment);
    };
    factory.curIndex = 0;

    return factory;
}

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
