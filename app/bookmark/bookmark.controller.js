(function() {
    angular
        .module('linked-learning')
        .controller('BookmarkController', BookmarkController);

    function BookmarkController(BookmarkFactory, UserFactory) {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.urlRegEx = /(http(s)?:\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/;

        vm.bookmarks = [];
        vm.newComment = {};
        vm.newBookmark = {};
        vm.search = "";

        vm.addBookmark = addBookmark;
        vm.deleteBookmark = deleteBookmark;
        vm.loadComments = loadComments;

        activate();

        ////////////////

        function activate() {
            vm.bookmarks = BookmarkFactory.bookmarks;
        }

        function addBookmark() {
                console.log("adding bookmark");
                vm.newBookmark.url = vm.newBookmark.url.replace('https://', '');
                vm.newBookmark.url = vm.newBookmark.url.replace('http://', '');

                vm.newBookmark.user = UserFactory.name;
                vm.newBookmark.date = Date.now();
                vm.newBookmark.comments = [];

                vm.bookmarks.push(vm.newBookmark);
                vm.newBookmark = {};

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
