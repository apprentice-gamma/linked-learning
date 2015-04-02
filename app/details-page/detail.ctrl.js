(function(){
angular
	.module('linked-learning')
	.controller('DetailController', DetailController);

	function DetailController ($routeParams){
		var vm = this;
		vm.bookmarkURL = $routeParams.bookmarkURL;
		vm.iframeURL = "http://" + vm.bookmarkURL;

		vm.bookmark = {title: 'W3Schools', url: vm.iframeURL,};

	}

})();