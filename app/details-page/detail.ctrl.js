(function(){
	angular
		.module('linked-learning')
		.controller('DetailController', DetailController);

		function DetailController ($routeParams, BookmarkFactory){
			var vm = this;
			vm.urlID = $routeParams.bookmarkURL;
			vm.bookmark = BookmarkFactory.bookmarks[BookmarkFactory.curIndex];
			vm.iframeURL = "http://" + vm.bookmark.url;
		}
})();
