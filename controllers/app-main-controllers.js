(function () {
    var app = angular.module('appMainModule.controllers', [
        'appMainModule.navController',
        'appMainModule.sliderController',
        'appMainModule.videoController'
    ]);

    // Added
    var ryan="hello";

    /**
     * Main Application Controller
     * JSON loading is here for now
     */
    app.controller('MainController', ['$http', function ($http) {
        $http({method: 'GET', url: 'data/jsondata.txt'}).
            success(function (data, status, headers, config) {
            }).
            error(function (data, status, headers, config) {
            });
    }]);

})();

