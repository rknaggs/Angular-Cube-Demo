(function () {
    var app = angular.module('appMainModule.videoController', [ ]);

    /**
     * CreateController
     * Inject $scope and SharedService as listener for navigation events
     */
    app.controller('VideoController', ['$scope', 'SharedService', function ($scope, SharedService) {
        /*
         Event listener for SharedService
         Needed to listen to any events from other controllers
         */
        $scope.$on('reset', function () {
            //$scope.containerObj = SharedService.containerObj;
            // Clear the model and views
//            $scope.clearAll($scope.model);
        });


        $scope.init = function () {
            $scope.player = document.getElementById("front-video");
            $scope.video = document.querySelector('front-video');
            $scope.video.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);


        };

        $scope.ctrlAction = function (event) {

            if ($scope.player.paused) {
                $scope.player.play();
            } else {
                $scope.player.pause();
            }
        };

        $scope.playPause = function () {

        }

    }]);

})();
