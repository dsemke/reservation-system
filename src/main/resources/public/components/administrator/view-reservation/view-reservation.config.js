(function() {
  'use strict';

  angular.
  module('viewReservations').
  config(angularConfig);

  angularConfig.$inject = ['$locationProvider', '$routeProvider'];
  // Angular Routing for /home, and redirect of if not specified
  function angularConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    // Route for template render
    $routeProvider.when('/reservations/', {
      template: '<view-reservations></view-reservations>'
    })
    .otherwise({ redirectTo: '/' });
  }
})();