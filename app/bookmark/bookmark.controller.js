(function() {
    angular
        .module('app')
        .controller('MainController', BookmarkController);

    function BookmarkController() {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.bookmarks = [];
        vm.search = "";

        activate(vm);

        ////////////////

        function activate(vm) {
        	var newBookMark = {};
	        	newBookMark.url = "http://www.google.com/";
	        	newBookMark.date = Date.now();
	        	newBookMark.user = "Robot";
	        	newBookMark.comment = "A search engine";
	        	newBookMark.title = "Google!";
	        vm.bookmarks.push(newBookMark);
	        newBookMark = {};
	     	    newBookMark.url = "http://www.github.com/";
	        	newBookMark.date = Date.now();
	        	newBookMark.user = "Robot";
	        	newBookMark.comment = "version tracking mastersite pro gold";
	        	newBookMark.title = "Git Hub!";
	        vm.bookmarks.push(newBookMark);
	        newBookMark = {};
        }
    }
})();