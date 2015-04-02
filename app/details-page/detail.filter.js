(function(){

angular
  .module('app')
  .filter('trust', [
    '$sce',
    function($sce) {
      return function(value) {
     
        return $sce.trustAsResourceUrl(value);
      }
    }
  ])
;

})();