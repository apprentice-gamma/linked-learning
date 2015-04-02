angular
	.module('linked-learning')
	.controller("CommentsController", CommentsController);

	// Comments array to emulate the array of comments in Bookmark
	function CommentsController($routeParams, BookmarkFactory) {
		var vm = this;
		vm.currentBookmarkURL = $routeParams.bookmarkURL;
		vm.existingComments = [];


		for (var i = 0; i < BookmarkFactory.bookmarks.length; i++) {
			if (vm.currentBookmarkURL === BookmarkFactory.bookmarks[i].url)
				vm.existingComments = BookmarkFactory.bookmarks[i].comments;
		};

		vm.comment = {
			body: "",
			date: Date.now()
		};

		vm.addComment = function() {
			vm.existingComments.push(vm.comment);
			vm.comment = {
				body: "",
				date: Date.now()
			};
		};

	}


