(function() {
    'use strict';

    angular
        .module('bookmark')
        .controller('BookmarkController', Controller);

    /* @ngInject */
    function Controller(dependencies) {
        var vm = this;
        vm.title = 'BookmarkController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();