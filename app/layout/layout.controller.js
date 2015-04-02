(function() {
    angular
        .module('linked-learning')
        .controller('LayoutController', Controller);

    function Controller() {
        var vm = this;
        vm.title = 'Layout Controller';
        vm.pageL = 'listings';
        vm.pageR = 'add';
        vm.swapRightCol = swapRightCol;

        activate();

        ////////////////

        function activate() {
        }

        function swapRightCol() {
            vm.pageR = 'add';
        }
    }
})();