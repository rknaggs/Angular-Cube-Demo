(function () {
    var app = angular.module('appMainModule.sliderController', [ ]);

    app.controller('SliderController', ['$http', '$scope', 'SharedService', function ($http, $scope, SharedService) {


         $scope.$watchCollection('myform',function(val){
            $scope.instance.update($scope.myform);
        });

        $scope.init = function () {
            $scope.instance = new SlideShow();
            // Bootstrap 3 Fix - Sometimes the bootstrap column forgets to include the custom directive
            // This can lead to your modules be absent.  The following will tell bootstrap to
            // refresh the column that holds your module or components
            // I personally do not want this here but I'm forced to do this.
            setTimeout(function() { $scope.instance.update($scope.myform); }, 1);
        };

        // Broadcast Event
        $scope.slideAction = function (event) {
            console.log("event.target.id: " + event.target.id);
        };

        // Local Listener
        $scope.$on('handleBroadcast', function () {
            $scope.containerObj = SharedService.containerObj;
        });

        $scope.$on('reset', function () {
            $scope.containerObj = SharedService.containerObj;
        });
    }]);
})();




