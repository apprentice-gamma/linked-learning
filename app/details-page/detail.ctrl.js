(function(){
angular
	.module('app')
	.controller('DetailController', DetailController);

	function DetailController (){
		var vm = this;
		vm.bookmark = {url: "http://www.w3schools.com/"};
		
	};

})();