/**
 * Samsara Pistachio Frontend
 * MVVM service file
 */
'use strict';

const API_URL = 'http://127.0.0.1:8080/Pistachio/api/';

var pistachioServices = angular.module('pistachioServices', ['ngResource']);

pistachioServices.factory('Book', ['$resource', function($resource) {
    return $resource(API_URL + 'book/new', {}, {
        //query: {method:'GET', params:{bookId:'books'}, isArray:true},
        test: {method:'GET', isArray:true}
    });
}]);