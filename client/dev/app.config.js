;(function(ng) {
  'use strict';

  ng.module('Dontop-Radio')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
