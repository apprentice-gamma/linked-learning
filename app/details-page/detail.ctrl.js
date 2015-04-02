(function(){
angular
	.module('linked-learning')
	.controller('DetailController', DetailController);

	function DetailController ($routeParams, ){
		var vm = this;
		//vm.bookmarks = BookmarkFactory;

		vm.bookmarkURL = $routeParams.bookmarkURL;
		vm.iframeURL = "http://" + vm.bookmarkURL;

		//Find which bookmark in bookmarks, based upon bookmarkURL
		//pull url from ^^^

		vm.bookmark = {title: 'W3Schools', url: vm.iframeURL,};

	}

})();