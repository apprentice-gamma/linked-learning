angular.module('linked-learning', ['ngRoute']);
angular.module('linked-learning').config(Configuration);
angular.module('linked-learning').factory(BookmarkFactory);

function BookmarkFactory() {
    var fac = {};
    var newBookmark = {};
    var newComment = {};
    
    fac.bookmarks = [];

    newComment.body = "Google is the best search engine EVER!";
    newComment.date = Date.now();
    newBookmark.comments =[];
    newBookmark.comments.push(newComment);
    newComment = {};

    newComment.body = "Google is not the best search engine - bing is!";
    newComment.date = Date.now();
    newBookmark.comments.push(newComment);
    newComment = {};

    newBookmark.url = "www.google.com/";
    newBookmark.user = "Robot";
    newBookmark.description = "A search engine";
    newBookmark.title = "Google!";
    newBookmark.date = Date.now();
    fac.bookmarks.push(newBookmark);
    newBookmark = {};

    
    newBookmark.url = "www.github.com/";
    newBookmark.user = "Robot";
    newBookmark.description = "version tracking mastersite pro gold";
    newBookmark.title = "Git Hub!";
    newBookmark.date = Date.now();
    newBookmark.comments =[];
    newComment.body = "Github is super cool!";
    newComment.date = Date.now();
    newBookmark.comments.push(newComment);
    
    newComment = {};
    fac.bookmarks.push(newBookmark);
    newBookmark = {};


    return fac;
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

