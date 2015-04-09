(function(){
	angular
		.module('linked-learning')
		.controller('BookmarkController', BookmarkController);

		function BookmarkController ($scope, $location, $routeParams, BookmarkFactory){
			var vm = this;
			vm.urlID = $routeParams.bookmarkURL;
			vm.bookmark = {};
			vm.iframeURL = "http://" + vm.urlID;
			vm.bookmarks = [];
			vm.index = BookmarkFactory.curIndex;
			vm.bookmark.title = 'title';
			vm.getBookmarks = getBookmarks;

			vm.getBookmarks();
       
	        $scope.$watch(pathValue, pathChanged); 

			function getBookmarks  () {
        	BookmarkFactory.getBookmarks()
            	.success(function (data) {
            		vm.bookmarks = data;
            		vm.bookmark = data[BookmarkFactory.curIndex];
            		vm.bookmark.url = data[BookmarkFactory.curIndex].url;  	
            	});
        	}
        	
	        function updateIndex(routeID) {   
	            for (var i = 0; i < vm.bookmarks.length; i++) {
	                console.log('routeID: ', routeID);
	                console.log('bookmark url:', vm.bookmarks[i].url);
	                
	                if (routeIDMatchesStoredURL(routeID, vm.bookmarks[i].url)) {
	                    BookmarkFactory.curIndex = i;
	                    console.log("TEST: MATCH FOUND");
	                    break;  
	                }
	            }
	        }

	        function routeIDMatchesStoredURL(routeID, url) {
	            var routeIDWithSlash = routeID + '/';
	            console.log ('TEST checking matches of url');
	            console.log ('tempRouteID', routeIDWithSlash, url === routeIDWithSlash);
	            console.log ('normRouteID', routeID, routeID === url);
	            console.log ('url in BM', url);
	            return ((routeID===url) || (routeIDWithSlash === url));
	        }

	        /////////////////////////////////////////////
	        //These are the watch functions. They come in pairs
	        

	        function pathValue() {
	            return $location.path();
	        }

	        function pathChanged(newValue) {
	            console.log("ROUTE CHANGE");
	            updateIndex($routeParams.bookmarkURL);
	        }

		}
})();
