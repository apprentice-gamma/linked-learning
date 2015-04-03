(function() {
    angular
        .module('linked-learning')
        .controller('LayoutController', Controller);

    function Controller($scope, $location, BookmarkFactory) {
        var vm = this;
        vm.title = 'Layout Controller';
        vm.pageR = 'add';   //values should be 'add' or 'comments'
        vm.switchToAddBookmark = switchToAddBookmark;
        vm.returnToListings = returnToListings;
      
        activate();

        ////////////////

        function activate() {
        }

        function switchToAddBookmark() {
            vm.pageR = 'add';
        }

        function returnToListings() {
            $location.url('/');
        }

    }
})();