(function() {
    angular
        .module('linked-learning')
        .controller('BookmarkController', BookmarkController);

    function BookmarkController() {
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

            vm.newComment.body = "Google is the best search engine EVER!";
            vm.newComment.date = Date.now();
            vm.newBookmark.comments =[];
            vm.newBookmark.comments.push(vm.newComment);
            vm.newComment = {};

            vm.newComment.body = "Google is not the best search engine - bing is!";
            vm.newComment.date = Date.now();
            vm.newBookmark.comments.push(vm.newComment);
            vm.newComment = {};

            vm.newBookmark.url = "http://www.google.com/";
            vm.newBookmark.user = "Robot";
            vm.newBookmark.description = "A search engine";
            vm.newBookmark.title = "Google!";
            vm.newBookmark.date = Date.now();
            vm.bookmarks.push(vm.newBookmark);
            vm.newBookmark = {};

            
            vm.newBookmark.url = "http://www.github.com/";
            vm.newBookmark.user = "Robot";
            vm.newBookmark.description = "version tracking mastersite pro gold";
            vm.newBookmark.title = "Git Hub!";
            vm.newBookmark.date = Date.now();
            vm.bookmarks.push(vm.newBookmark);
            vm.newBookmark = {};
        }

        function addBookmark(isValid) {
                console.log("adding bookmark");
                vm.newBookmark.date = Date.now();
                vm.bookmarks.push(vm.newBookmark);
                vm.newBookmark = {};
                vm.newBookmark.comments = [];        

        }

        function deleteBookmark(index) {
            console.log("Removing bookmark at " + index);
            vm.bookmarks.splice(index, 1);

        }

        function loadComments(index, commentController) {
             if(typeof vm.bookmarks[index].comments === "undefined"){
                vm.bookmarks[index].comments = [];
                console.log("was undefined, but we fixed it!");
            }
            commentController.existingComments = vm.bookmarks[index].comments;
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