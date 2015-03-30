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

        activate();

        ////////////////

        function activate() {}
    }
})();