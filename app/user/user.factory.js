(function() {

    angular.module('linked-learning').factory('UserFactory', UserFactory);

    function UserFactory() {
        var factory = {};
        factory.id = 0;
        factory.name = "";
        factory.picture = "";

        return factory;
    }

})();