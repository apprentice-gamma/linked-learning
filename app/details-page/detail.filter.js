(function(){

angular
	.module('app')
	.filter('trust', function($sce) {
        return function(input) {
            return $sce.trustAsHtml(input || '');
        }
	});

})();