(function() {
    angular
        .module('linked-learning')
        .controller('BookmarkController', BookmarkController);

    function BookmarkController(BookmarkFactory) {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.urlRegEx = /(http(s)?:\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/;

        vm.bookmarks = [];
        vm.newComment = {};
        vm.newBookmark = {};
        vm.search = "";
        
        // vm.addBookmark = addBookmark;
        vm.deleteBookmark = deleteBookmark;
        vm.loadComments = loadComments;

        // activate();

        ////////////////

        // function activate() {
        //     vm.bookmarks = BookmarkFactory.bookmarks;
        // }

        vm.getBookmarks = function () {
        BookmarkFactory.getBookmarks()
            .success(function (data) {
                vm.bookmarks = data;   
            });
        }
        vm.getBookmarks();

        vm.addBookmark = function(bookmark) {

                console.log("adding bookmark");
                bookmark.url = bookmark.url.replace('https://', '');
                bookmark.url = bookmark.url.replace('http://', '');

                // vm.newBookmark.date = Date.now();
                // vm.newBookmark.comments = [];
                
               BookmarkFactory.addBookmark(bookmark)
                    .success(function (bookmark) {
                        vm.bookmarks.push(bookmark);
                    });
                vm.newBookmark = {};
                
        }

        function deleteBookmark(index) {
            console.log("Removing bookmark at " + index);
            vm.bookmarks.splice(index, 1);
        }

        function loadComments(index, layoutController) {
            if(typeof vm.bookmarks[index].comments === "undefined"){
                vm.bookmarks[index].comments = [];
                console.log("was undefined, but we fixed it!");
            }

            BookmarkFactory.curIndex = index;
            layoutController.pageR ='comments';
        }
    }
})();
