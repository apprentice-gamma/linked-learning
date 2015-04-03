angular.module('linked-learning', ['ngRoute']);
angular.module('linked-learning').config(Configuration);
angular.module('linked-learning').factory('BookmarkFactory', BookmarkFactory);

function BookmarkFactory() {
    var factory = {};
    var newBookmark = {};
    var newComment = {};

    factory.bookmarks = [];

    newComment.body = "Google is the best search engine EVER!";
    newComment.date = Date.now();
    newBookmark.comments =[];
    newBookmark.comments.push(newComment);
    newComment = {};

    newComment.body = "Google is not the best search engine - bing is!";
    newComment.date = Date.now();
    newBookmark.comments.push(newComment);
    newComment = {};

    newBookmark.url = "www.w3schools.com/";
    newBookmark.user = "Robot";
    newBookmark.description = "A search engine";
    newBookmark.title = "W3 Schools";
    newBookmark.date = Date.now();
    factory.bookmarks.push(newBookmark);
    newBookmark = {};


    newBookmark.url = "www.detroitlabs.com/";
    newBookmark.user = "Robot";
    newBookmark.description = "version tracking mastersite pro gold";
    newBookmark.title = "Detroit Labs";
    newBookmark.date = Date.now();
    newBookmark.comments =[];
    newComment.body = "Github is super cool!";
    newComment.date = Date.now();
    newBookmark.comments.push(newComment);

    newComment = {};
    factory.bookmarks.push(newBookmark);
    newBookmark = {};

    factory.curIndex = 0;
    return factory;
}

function Configuration($routeProvider) {
	$routeProvider

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

