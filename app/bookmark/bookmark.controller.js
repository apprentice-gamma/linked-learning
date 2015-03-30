// angular.module('app').controller("MainController", function() {
//     var vm = this;
//     vm.title = "Bookmark Controller";
// });
(function() {
    angular
        .module('app')
        .controller('MainController', BookmarkController);

    function BookmarkController() {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.bookmarks = [];
        
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
        }
    }
})();