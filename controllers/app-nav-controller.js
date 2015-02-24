(function () {
    var app = angular.module('appMainModule.navController', [ ]);

    /**
     * CreateController
     * Inject $scope and SharedService as listener for navigation events
     */
    app.controller('NavController', ['$scope', 'SharedService', function ($scope, SharedService) {

        // Main display element
        var MAIN_WRAPPER = "#wrapper";

        // Sidebar elements
        var SB_WRAPPER = "#sidebar-wrapper";
        var SB_BUTTON = "#sidebar_btn_container";
        var SB_TOGGLE = "#sidebar-toggle-btn";

        // Sidebar offsets
        var SIDEBAR_MIN = 768;
        var OFFSET_HEIGHT = 120;

        // Sidebar class
        var SB_CLASS = "toggled";

        // Content wrappers
        var CONTENT_WRAPPER = "#content-display";

        // Page redraw timeout
        var TIMEOUT = 500;

        // Sidebar toggle state
        var isOpen = false;
        var sbPrevState = null;
        var toggle_F = false;


        /*
         Event listener for SharedService
         Needed to listen to any events from other controllers
         */
        $scope.$on('reset', function () {
            //$scope.containerObj = SharedService.containerObj;
            // Clear the model and views
//            $scope.clearAll($scope.model);
            $scope.jsonConvert();
        });




        /**
         * Detect when transition is finished for sidebar toggling transition
         */
        $("#wrapper").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
            updateScreen();
        });

        /**
         * Detect if window has resized
         * Safari doesn't support css calc so the screen update
         * is to reposition and update
         */

        $(window).resize(function (e) {
            $scope.toggle($(window).width());
        });


        /**
         * User selects toggle bar to open / close
         * @param event
         */
        $scope.toggleSidebar = function (event) {
            $(SB_WRAPPER).width() === 0 ? isOpen = true : isOpen = false;
            $(MAIN_WRAPPER).toggleClass(SB_CLASS);
            updateScreen();
        };


        /**
         * Adjust sidebar based on window size
         * @param appWidth
         */
        $scope.toggle = function (appWidth) {

            if (appWidth < SIDEBAR_MIN) {
//                $(SB_TOGGLE).hide();
                $(SB_TOGGLE).css("display","none");
                if (isOpen && sbPrevState == null) {
                    $(MAIN_WRAPPER).toggleClass(SB_CLASS);
                    sbPrevState = isOpen;
                }
            } else {
//                $(SB_TOGGLE).show();
                $(SB_TOGGLE).css("display","block");
                if (isOpen && sbPrevState) {
                    $(MAIN_WRAPPER).toggleClass(SB_CLASS);
                    sbPrevState = null;
                }

            }

            // Refresh Screen elements
            resizeElements();

        };


        /**
         * Add new Row and Columns
         * @param event
         */
        $scope.ctrlAction = function (event) {


            console.log("ctrlaction navcontroller: "+event);
            switch (event.target.id) {
                case "sidebar-toggle-btn":
                    $scope.toggleSidebar(event);
                    break;
                case "nav-about-btn":
                    $scope.displayModal();
                    break;
                default:
                    break;
            }

        };


        $scope.displayModal = function() {

        };

        /**
         * Resize content window and sidebar toggle
         * When sidebar is present, the content div
         * will slide off the right part of the screen
         * this method will fix this
         */

        function resizeElements() {
            // Safari resize fix (height)
            var wrapper = $(SB_WRAPPER);
            var pageBottom = wrapper.height() - OFFSET_HEIGHT;
                $(CONTENT_WRAPPER).height(pageBottom);
                $(SB_BUTTON).height(pageBottom);

            // Fix content display height
//            setTimeout(function () {
//                $(CONTENT_WRAPPER).height(pageBottom);
//                $(SB_BUTTON).height(pageBottom);
//            }, 500);

//            $(PAGE_CONTENT_WRAPPER).width($(window).width() - wrapper.width());
        }


        /**
         * Update the main content window
         * Designed if the sidebar is toggled
         */
        function updateScreen() {

            if (!toggle_F) {
                toggle_F = true;
                    resizeElements();

                // Sidebar resize fix
                var i = setInterval(function () {

                    var sb = $(SB_WRAPPER).width();
                    if (sb <= 0 || sb >= parseInt($(".sidebar-nav").css("width").replace(/[^0-9]/g, ''))) {
                        toggle_F = false;
                        clearInterval(i);
                    }
                }, TIMEOUT);
            }
        }

        updateScreen();

    }]);

})();
