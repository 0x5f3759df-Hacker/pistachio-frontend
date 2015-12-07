/**
 * Samsara Pistachio Frontend
 * Angular app module file
 */
'use strict';

// Pistachio App Module
var pistachioApp = angular.module('pistachioApp', [
    'ngRoute',
    'pistachioControllers',
    'pistachioServices',
    'pistachioAnimations'
]);

pistachioApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/book/:bookId', {
            templateUrl: 'pages/test.html',
            data: {pageTitle: '很纯洁的测试页面'},
            controller: 'BookCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
