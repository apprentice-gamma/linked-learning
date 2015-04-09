(function() {
    angular
        .module('linked-learning')
        .controller('BookmarkController', BookmarkController);

    function BookmarkController(BookmarkFactory, UserFactory, $route, $timeout) {

        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.urlRegEx = /(http(s)?:\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/;

        vm.bookmarks = [];
        vm.newComment = {};
        vm.newBookmark = {};

        vm.search = "";
        //this should hold our status messages for errors
        vm.status = "";
        vm.deleteBookmark = deleteBookmark;
        vm.loadComments = loadComments;
        vm.reload = function() {
            return $route.reload();
        };


        vm.getBookmarks = function () {
            BookmarkFactory.getBookmarks()
                .success(function (data) {
                    vm.bookmarks = data;   
                });
            };
        

        vm.getBookmarks();

        vm.addBookmark = function(bookmark) {
            bookmark.url = bookmark.url.replace('https://', '');
            bookmark.url = bookmark.url.replace('http://', '');
            bookmark.user = UserFactory.name;

           BookmarkFactory.addBookmark(bookmark)
                .success(function () {
                    vm.bookmarks.push(bookmark);
                });       
            vm.newBookmark = {};
           $timeout(vm.reload, 150);
        }

        function deleteBookmark(index) {
            console.log("Removing bookmark at " + index);
            vm.bookmarks.splice(index, 1);
        }

        function loadComments(index, layoutController) {
            if(typeof vm.bookmarks[index].comments === "undefined"){
                vm.bookmarks[index].comments = [];
            }

            BookmarkFactory.curIndex = index;
            layoutController.pageR ='comments';
        }
    }
})();
