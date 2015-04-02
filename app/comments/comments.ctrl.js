angular
	.module('linked-learning')
	.controller("CommentsController", CommentsController);

	// Comments array to emulate the array of comments in Bookmark
	function CommentsController($scope, $location, $routeParams, BookmarkFactory) {
		var vm = this;
		vm.addComment = addComment;
		vm.comment = { body: "", date: Date.now() };

		vm.currentBookmarkURL = $routeParams.bookmarkURL;
		vm.existingComments = BookmarkFactory.bookmarks[BookmarkFactory.curIndex].comments;

		$scope.$watch(indexValue, indexChange);
		$scope.$watch(function(){
		    return $location.path();
		}, function(value){
			console.log("ROUTE CHANGE");

		    updateIndex($routeParams.bookmarkURL);
		});
		

		/////////////////////////////////////////////
		function addComment() {
			vm.existingComments.push(vm.comment);
			vm.comment = {
				body: "",
				date: Date.now()
			};
		}

		/////////////////////////////////////////////
		function updateIndex(url) {
			console.log('UPDATE INDEX');
			console.log(BookmarkFactory.bookmarks.length);
			if(url.charAt(url.length - 1) !== '/') {
				url += '/';
			}

			for (var i = 0; i < BookmarkFactory.bookmarks.length; i++) {
				console.log('url: ', url);
				console.log('bookmark:', BookmarkFactory.bookmarks[i].url);
				if (url == BookmarkFactory.bookmarks[i].url) {
					BookmarkFactory.curIndex = i;
					console.log(i);
					break;
				}
			}
		}

		function indexValue() { 
			return BookmarkFactory.curIndex;
		}

		function indexChange(newValue, oldValue) {
			vm.existingComments = BookmarkFactory.bookmarks[newValue].comments;
		}

	}