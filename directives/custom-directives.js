(function () {

    /*
     * To keep the code organized, separate the custom directives
     * from the controller code
     */

    var app = angular.module('custom-directives', [ ]);

    /**
     * This is a Element directive
     */
    app.directive('appNavigation', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/app-navigation.html'

        };
    });

     /**
     * This is a Element directive
     */
    app.directive('appModal', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/modals/modal-about.html'

        };
    });

    /**
     * This is a Element directive
     */
    app.directive('appSidebar', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/app-sidebar.html'

        };
    });


    /**
     * This is a Element directive
     */
    app.directive('appContent', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/app-content.html'

        };
    });


    /**
     * This is a Element directive
     */
    app.directive('appSlideview', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/slideshow/templates/slide-view.html'

        };
    });


    /**
     * This is a Element directive
     */
    app.directive('appSlidecontrols', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/slideshow/templates/slide-controls.html'

        };
    });


    /**
     * This is a Element directive
     */
    app.directive('appSlideshow', function () {

        return {
            // Returns a configuration object defining how you directive will work

            // The type of directive (E for Element)
            restrict: 'E',
            templateUrl: 'templates/slideshow/app-slideshow.html'

        };
    });

})();