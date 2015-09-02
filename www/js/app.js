// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('tabs',{
      url:'/tab',
      abstract: true,
      templateUrl:'template/tabs.html',
    })
    .state('tabs.persons',{
      url:'/person',
      views: {
        'list-person': {
          templateUrl: 'template/student.html',
          controller: 'ListController'
        }
      }
    })
  $urlRouterProvider.otherwise('/tab/person');
})

.controller('ListController',['$scope','$http',controlFunctionality]);

function controlFunctionality($scope,$http){
  $scope.status = "start your national anthem";
  $http.get('data/socio.json')
    .success(function(data) {
      $scope.status = data.ifr;
    })
    .error(function(data, status) {
      console.error('System error', status, data);
    })
    
}