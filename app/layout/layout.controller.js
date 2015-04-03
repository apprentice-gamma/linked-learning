(function() {
    angular
        .module('linked-learning')
        .controller('LayoutController', Controller);

    function Controller() {
        var vm = this;
        vm.title = 'Layout Controller';
        vm.pageL = 'listings';
        vm.pageR = 'add';
        vm.switchToAddBookmark = switchToAddBookmark;

        activate();

        ////////////////

        function activate() {
        }

        function switchToAddBookmark() {
            vm.pageR = 'add';
        }
    }
})();