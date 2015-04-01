(function() {
    angular
        .module('linked-learning')
        .controller('LayoutController', Controller);

    function Controller() {
        var vm = this;
        vm.title = 'Layout Controller';
        vm.pageL = 'listings';
        vm.pageR = 'add';

        activate();

        ////////////////

        function activate() {
        }
    }
})();