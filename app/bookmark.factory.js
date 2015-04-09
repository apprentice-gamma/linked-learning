(function(){

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
    
})();