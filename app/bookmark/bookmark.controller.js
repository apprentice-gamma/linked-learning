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
        vm.bookmark = {};

        activate(vm);

        ////////////////

        function activate(vm) {
        	vm.bookmark.url = "http://www.google.com/";
        	vm.bookmark.date = Date.now();
        	vm.bookmark.user = "Robot";
        	vm.bookmark.comment = "A search engine";
        	vm.bookmark.title = "Google!";
        }
    }
})();