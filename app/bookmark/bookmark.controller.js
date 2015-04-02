(function() {
    angular
        .module('linked-learning')
        .controller('BookmarkController', BookmarkController);

    function BookmarkController(BookmarkFactory) {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.bookmarks = [];
        vm.search = "";
        vm.addBookmark = addBookmark;
        vm.deleteBookmark = deleteBookmark;

        vm.loadComments = loadComments;
        vm.addComment = addComment;
        vm.deleteComment = deleteComment;

        vm.newComment = {};
        vm.newBookmark = {};
        vm.urlRegEx = /(http(s)?:\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/;

        activate(vm);

        ////////////////

        function activate(vm) {
            vm.bookmarks = BookmarkFactory.bookmarks;
        }

        function addBookmark(isValid) {
                console.log("adding bookmark");
                vm.newBookmark.url = vm.newBookmark.url.replace('https://', '');
                vm.newBookmark.url = vm.newBookmark.url.replace('http://', '');

                vm.newBookmark.date = Date.now();
                vm.bookmarks.push(vm.newBookmark);
                vm.newBookmark = {};
                vm.newBookmark.comments = [];

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
            //commentController.existingComments = vm.bookmarks[index].comments;
            BookmarkFactory.curIndex = index;
            layoutController.pageR ='comments';
        }

        function addComment(bookmark) {
                console.log("adding comment");
                vm.newComment.date = Date.now();
                bookmark.comments.push(vm.newComment);
                vm.newComment = {};

        }

        function deleteComment(bookmark, index) {
            console.log("Removing comments at " + index);
            bookmark.comments.splice(index, 1);

        }
    }
})();
