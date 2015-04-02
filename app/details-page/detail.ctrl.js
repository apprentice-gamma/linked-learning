(function(){
angular
	.module('linked-learning')
	.controller('DetailController', DetailController);

	function DetailController (){
		var vm = this;
		vm.bookmark = {title: 'W3Schools', url: "http://www.w3schools.com/"};

	};

})();