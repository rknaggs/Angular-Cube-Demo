/***
 * Ryan C. Knaggs Portfolio 2014
 * @author Ryan C. Knaggs 08/23/2014
 * @description: The main goal is to write a JavaScript application

 /**
 * Anonymous function to instantiate all
 * functionality for AngularJS
 */
(function () {
    /**
     * Create a new angular application module
     * There are dependencies for rounting and custom directives
     * @type {module}
     */
    var app = angular.module('appMainModule', [
        'custom-directives',
        'ngRoute',
        'appMainModule.controllers'
    ]);


    /**
     * Routing
     * Designed to change the view interface
     */
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'MainController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);



    /**
     * Factory service for sharing data between controllers
     * The controllers are assign to handle different things
     * Sometimes you need to from controller to controller
     * in this angular module.
     * It's a event messaging service to allow
     * any controller to register to this share service
     * for lose coupling.
     */
    app.factory('SharedService', function ($rootScope) {
        var sharedService = {};

        sharedService.containerObj = {};

        sharedService.prepForBroadcast = function (obj) {
            this.containerObj = obj;
            this.broadcastItem();
        };

        sharedService.broadcastItem = function () {
            $rootScope.$broadcast('handleBroadcast');
        };

        sharedService.reset = function (obj) {
            this.containerObj = obj;
            this.reset();
        };

        sharedService.reset = function () {
            $rootScope.$broadcast('reset');
        };

        return sharedService;
    });

})();
