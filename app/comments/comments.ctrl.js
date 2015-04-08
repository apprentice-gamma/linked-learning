angular
	.module('linked-learning')
	.controller("CommentsController", CommentsController);

	// Comments array to emulate the array of comments in Bookmark
	function CommentsController($scope, $location, $routeParams, BookmarkFactory, UserFactory, $timeout, $route) {
		var vm = this;
		vm.urlID = $routeParams.bookmarkURL;
		vm.deleteComment = deleteComment;
		vm.bookmarks = [];
		vm.existingComments = [];
		vm.currentTouchedURL = "";
		
		vm.reload = function() {
            return $route.reload();
        };

		
		vm.getBookmarks = function () {
        	BookmarkFactory.getBookmarks()
            	.success(function (data) {
            		vm.bookmarks = data;
                	vm.existingComments = data[BookmarkFactory.curIndex].comments;
                	vm.currentTouchedURL = data[BookmarkFactory.curIndex].url;  
            	});
        };
        vm.getBookmarks();
        
        vm.addComment = function(comment){
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
    		// vm.comment = {};
            $timeout(vm.reload, 100);
        };

		
		vm.currentBookmarkURL = $routeParams.bookmarkURL;
		// vm.existingComments = vm.bookmarks[BookmarkFactory.curIndex].comments;
		// vm.currentTouchedURL = vm.bookmarks[BookmarkFactory.curIndex].url;

		
       

		//Set watches on BookmarkFactory.curIndex and $location.path()
		// the __Value functions return the variable's value 
		// the __Changed functions get called when the variables change. 
		$scope.$watch(indexValue, indexChanged);		//Watches BookmarkFactory.curIndex
		$scope.$watch(pathValue, pathChanged);			//Watches the path in the location bar
		    		
		/////////////////////////////////////////////
		// function addComment() {
		// 	vm.existingComments.push(vm.comment);
		// 	vm.comment = {
		// 		body: "",
		// 		date: Date.now()
		// 	};
		// }

		function deleteComment(bookmark, index) {
            console.log("Removing comments at " + index);
            bookmark.comments.splice(index, 1);

        }

		function updateIndex(routeID) {
			//This function is designed to update 
			// the curIndex property of BookmarkFactory
			// It gets called when URL changes 
			// (as determined by the watch on $location.path)
			// Because we're also watching the curIndex property
			// we don't need to update the existingComments object here.

			// console.log('UPDATE INDEX');
			// console.log(BookmarkFactory.bookmarks.length);
			
			for (var i = 0; i < vm.bookmarks; i++) {
				// console.log('routeID: ', routeID);
				// console.log('bookmark:', BookmarkFactory.bookmarks[i].url);
				
				if (routeIDMatchesStoredURL(routeID, BookmarkFactory.bookmarks[i].url)) {
					BookmarkFactory.curIndex = i;
					break;	//exit the loop when we find a match
				}
			}
		}

			//Chrome drops the trailing slash off URLS
			// check the URL string and see if it's got a trailing slash
			// check the path to see if it's got a trailing slash
			// make the two match. We want to try both ways.
		function routeIDMatchesStoredURL(routeID, url) {
			var routeIDWithSlash = routeID + '/';
			//console.log ('temp', routeIDWithSlash, url === routeIDWithSlash);
			//console.log ('norm', url, routeID === url);
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
			vm.currentTouchedURL = vm.bookmarks[newIndex].url;
			vm.existingComments = vm.bookmarks[newIndex].comments;
		}

		function pathValue() {
			return $location.path();
		}

		function pathChanged(newValue) {
			//console.log("ROUTE CHANGE");
		    updateIndex($routeParams.bookmarkURL);
		}

	}