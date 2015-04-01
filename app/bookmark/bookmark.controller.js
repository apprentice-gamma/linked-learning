(function() {
    angular
        .module('bookmark')
        .controller('BookmarkController', BookmarkController);

    function BookmarkController() {
        var vm = this;
        vm.title = "Bookmark Controller Outside";
        vm.bookmarks = [];
        vm.search = "";
        vm.addBookmark = addBookmark;
        vm.deleteBookmark = deleteBookmark;
        vm.newBookmark = {};
        activate(vm);

        ////////////////

        function activate(vm) {

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
            if (isValid) {
                console.log('VALID!');
                console.log("adding bookmark");
                vm.newBookmark.date = Date.now();
                vm.bookmarks.push(vm.newBookmark);
                vm.newBookmark = {};
            } else {
                console.log('inValid!');
                alert('Invalid Form');
            }

            

        }

        function deleteBookmark(index) {
            console.log("Removing bookmark at " + index);
            vm.bookmarks.splice(index, 1);

        }
    }
})();