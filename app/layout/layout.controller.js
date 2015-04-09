(function() {
    angular
        .module('linked-learning')
        .controller('LayoutController', Controller);

    function Controller($location, BookmarkFactory) {
        var vm = this;
        vm.title = 'Layout Controller';
        vm.pageRight = 'add';
        vm.switchToAddBookmark = switchToAddBookmark;
        vm.returnToListings = returnToListings;

        function switchToAddBookmark() {
            vm.pageRight = 'add';
            vm.returnToListings();
        }

        function returnToListings() {
            $location.url('/');
        }

    }
})();