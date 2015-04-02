(function(){
angular
	.module('linked-learning')
	.controller('DetailController', DetailController);

	function DetailController ($routeParams){
		var vm = this;
		vm.urlParameter = $routeParams.bookmarkURL;
		vm.bookmark = {title: 'W3Schools', url: "http://www.w3schools.com/"};

	}

})();