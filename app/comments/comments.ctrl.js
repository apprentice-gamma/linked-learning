angular
	.module('linked-learning')
	.controller("CommentsController", CommentsController);

	// Comments array to emulate the array of comments in Bookmark
	function CommentsController($scope, $routeParams, BookmarkFactory) {
		var vm = this;
		vm.addComment = addComment;
		$scope.$watch(indexValue, indexChange);
		vm.comment = {
			body: "",
			date: Date.now()
		};

		vm.currentBookmarkURL = $routeParams.bookmarkURL;
		vm.existingComments = BookmarkFactory.bookmarks[BookmarkFactory.curIndex].comments;

		// for (var i = 0; i < BookmarkFactory.bookmarks.length; i++) {
		// 	if (vm.currentBookmarkURL === BookmarkFactory.bookmarks[i].url)
		// 		vm.existingComments = BookmarkFactory.bookmarks[i].comments;
		// }

		

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
			for (var i = 0; i < BookmarkFactory.bookmarks.length; i++) {
				if (url === BookmarkFactory.bookmarks[i].url)
					BookmarkFactory.curIndex = i;
			}
		}

		function indexValue() { 
			return BookmarkFactory.curIndex;
		}

		function indexChange(newValue, oldValue) {
			vm.existingComments = BookmarkFactory.bookmarks[newValue].comments;
		}

	}