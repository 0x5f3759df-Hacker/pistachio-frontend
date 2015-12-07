/**
 * Samsara Pistachio Frontend
 * MVVM Controller file
 */
'use strict';

// controllers
var pistachioControllers = angular.module('pistachioControllers', []);

pistachioControllers.controller('BookCtrl', ['$scope', 'Book', function($scope, Book) {
    $scope.books = Book.test();
}]);
