angular
	.module('app')
	.controller("CommentsController", CommentsController);

	// Comments array to emulate the array of comments in Bookmark
	function CommentsController() {
		var vm = this;
		vm.comment = {
			body: "",
			date: Date.now()
		};
		vm.existingComments = [];
		vm.addComment = function() {
			vm.existingComments.push(vm.comment);
			vm.comment = {
				body: "",
				date: Date.now()
			};
		}

	}


