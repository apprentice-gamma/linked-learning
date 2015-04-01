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
        	if (vm.pageR === 'add') {
        		vm.pageR ='comments';
        	} else if (vm.pageR === 'comments') {
        		vm.pageR = 'add';
        	} else {
        		console.log('ERROR IN RH COL SWAP');
        	}
        }
    }
})();