(function(){
	angular
		.module('linked-learning')
		.controller('DetailController', DetailController);

		function DetailController ($scope, $location, $routeParams, BookmarkFactory){
			var vm = this;
			vm.urlID = $routeParams.bookmarkURL;
			vm.bookmark = BookmarkFactory.bookmarks[BookmarkFactory.curIndex];
			vm.iframeURL = "http://" + vm.bookmark.url;

	        //Set watches on BookmarkFactory.curIndex and $location.path()
	        // the __Value functions return the variable's value 
	        // the __Changed functions get called when the variables change. 
	        $scope.$watch(indexValue, indexChanged);        //Watches BookmarkFactory.curIndex
	        $scope.$watch(pathValue, pathChanged);          //Watches the path in the location bar
        
	        function updateIndex(routeID) {
	            //This function is designed to update 
	            // the curIndex property of BookmarkFactory
	            // It gets called when URL changes 
	            // (as determined by the watch on $location.path)
	            // Because we're also watching the curIndex property
	            // we don't need to update the existingComments object here.

	            console.log('UPDATE INDEX');
	            console.log(BookmarkFactory.bookmarks.length);
	            
	            for (var i = 0; i < BookmarkFactory.bookmarks.length; i++) {
	                console.log('routeID: ', routeID);
	                console.log('bookmark url:', BookmarkFactory.bookmarks[i].url);
	                
	                if (routeIDMatchesStoredURL(routeID, BookmarkFactory.bookmarks[i].url)) {
	                    BookmarkFactory.curIndex = i;
	                    console.log("TEST: MATCH FOUND");
	                    break;  //exit the loop when we find a match
	                }
	            }
	        }


	        //Chrome drops the trailing slash off URLS
	        // check the URL string and see if it's got a trailing slash
	        // check the path to see if it's got a trailing slash
	        // make the two match. We want to try both ways.
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
	        // one function returns the value watched
	        // the other runs when that value changes. 
	        function indexValue() { 
	            return BookmarkFactory.curIndex;
	        }

	        function indexChanged(newIndex) {
	            console.log('TEST: INDEX CHANGED', newIndex);
	            vm.bookmark = BookmarkFactory.bookmarks[newIndex];
				vm.iframeURL = "http://" + vm.bookmark.url;
	        }

	        function pathValue() {
	            return $location.path();
	        }

	        function pathChanged(newValue) {
	            console.log("ROUTE CHANGE");
	            updateIndex($routeParams.bookmarkURL);
	        }

		}
})();
