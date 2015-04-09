(function(){
	
	angular
		.module('linked-learning')
		.controller("CommentsController", CommentsController);

		
		function CommentsController($scope, $location, $routeParams, BookmarkFactory, UserFactory, $timeout, $route) {
			var vm = this;
			vm.urlID = $routeParams.bookmarkURL;
			vm.deleteComment = deleteComment;
			vm.bookmarks = [];
			vm.existingComments = [];
			vm.currentTouchedURL = "";
			vm.reload = reload;
			vm.getBookmarks = getBookmarks;
			vm.addComment = addComment;

			vm.getBookmarks();

			$scope.$watch(indexValue, indexChanged);
			$scope.$watch(pathValue, pathChanged);	

			vm.currentBookmarkURL = $routeParams.bookmarkURL;
			
			function reload () {
	            return $route.reload();
	        };

			function getBookmarks () {
	        	BookmarkFactory.getBookmarks()
	            	.success(function (data) {
	            		vm.bookmarks = data;
	                	vm.existingComments = data[BookmarkFactory.curIndex].comments;
	                	vm.currentTouchedURL = data[BookmarkFactory.curIndex].url;  
	            	});
	        };
	    	
	        function addComment (comment){
	        	comment.user = UserFactory.name
	        	var  newBookmark = {};
	        	for (var i = 0; i < vm.bookmarks.length; i++){
	        		if (vm.urlID === vm.bookmarks[i].url){
	        			newBookmark = vm.bookmarks[i];
	        		}
	        	}
	    		BookmarkFactory.addComment(newBookmark, comment)
	    			.success(function (){
	    				newBookmark.comments.push(comment);
	    			});
	            $timeout(vm.reload, 100);
	        };

			function deleteComment(bookmark, index) {
	            console.log("Removing comments at " + index);
	            bookmark.comments.splice(index, 1);
	        }

			function updateIndex(routeID) {			
				for (var i = 0; i < vm.bookmarks; i++) {
					if (routeIDMatchesStoredURL(routeID, BookmarkFactory.bookmarks[i].url)) {
						BookmarkFactory.curIndex = i;
						break;
					}
				}
			}

			function routeIDMatchesStoredURL(routeID, url) {
				var routeIDWithSlash = routeID + '/';
				return ((routeID===url) || (routeIDWithSlash === url));
			}

			/////////////////////////////////////////////
			//These are the watch functions. They come in pairs
			function indexValue() { 
				return BookmarkFactory.curIndex;
			}

			function indexChanged(newIndex) {
				vm.currentTouchedURL = vm.bookmarks[newIndex].url;
				vm.existingComments = vm.bookmarks[newIndex].comments;
			}

			function pathValue() {
				return $location.path();
			}

			function pathChanged(newValue) {
			    updateIndex($routeParams.bookmarkURL);
			}
		}

})();