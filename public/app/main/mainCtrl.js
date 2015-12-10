angular.module('app')
  .controller('mainCtrl', function () {

    var vm = this;
    vm.myName = "Angular";
    vm.now = new Date();
  });