(function(){
angular
	.module('app')
	.controller('DetailController', DetailController);

	function DetailController (){
		var vm = this;
		vm.bookmark = {title: 'W3Schools', url: "http://www.w3schools.com/"};

	};

})();