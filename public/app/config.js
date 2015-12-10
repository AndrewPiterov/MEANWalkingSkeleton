angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/partials/main/main',
      controller: 'mainCtrl as vm'
    });
  });