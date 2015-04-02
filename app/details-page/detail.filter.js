(function(){

angular
  .module('linked-learning')
  .filter('trust', [
    '$sce',
    function($sce) {
      return function(value) {
     
        return $sce.trustAsResourceUrl(value);
      };
    }
  ])
;

})();