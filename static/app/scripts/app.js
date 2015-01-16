'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module('IoTWorkshopWebApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/rating.html',
                controller: 'RatingCtrl'
            })
            .when('/logging',{
                templateUrl: 'views/logging.html',
                controller:'LoggingCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


    })
    .config(function ($httpProvider) {
        //setting http provider defaults
        $httpProvider.defaults.headers.common['Content-Type'] = "application/json; charset=utf-8"
    });

