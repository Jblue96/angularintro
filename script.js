console.log('test');
//creating the first App
var firstApp = angular.module('firstApp', []);
//First Controller
myApp.controller('theController1', function() {

  // first view model, controls whats posted to the DOM
  var vm = this;
  vm.kba1 = 'My first angular post';
  vm.kba2 = 'Second Angular post Woot! Woot!';

  vm.wbc = 'Alabama';

});
