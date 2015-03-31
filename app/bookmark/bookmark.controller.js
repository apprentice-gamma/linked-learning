(function() {
    angular
        .module('app')
        .controller('MainController', BookmarkController);

    function BookmarkController() {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.bookmarks = [];
        vm.search = "";
        vm.addBookmark = addBookmark;
        vm.deleteBookmark = deleteBookmark;
        vm.newBookmark = {};

        activate(vm);

        ////////////////

        function activate(vm) {
        	
	        	vm.newBookmark.url = "http://www.google.com/";
	        	vm.newBookmark.date = Date.now();
	        	vm.newBookmark.user = "Robot";
	        	vm.newBookmark.comment = "A search engine";
	        	vm.newBookmark.title = "Google!";
	        vm.bookmarks.push(vm.newBookmark);
	        vm.newBookmark = {};
	     	    vm.newBookmark.url = "http://www.github.com/";
	        	vm.newBookmark.date = Date.now();
	        	vm.newBookmark.user = "Robot";
	        	vm.newBookmark.comment = "version tracking mastersite pro gold";
	        	vm.newBookmark.title = "Git Hub!";
	        vm.bookmarks.push(vm.newBookmark);
	        vm.newBookmark = {};
        }

        function addBookmark() {
        	console.log("adding bookmark");
        	vm.newBookmark.date = Date.now();
        	vm.bookmarks.push(vm.newBookmark);
	        vm.newBookmark = {};

        }

        function deleteBookmark(index) {
        	console.log("Removing bookmark at " + index);
        	vm.bookmarks.splice(index, 1);

        }
    }
})();