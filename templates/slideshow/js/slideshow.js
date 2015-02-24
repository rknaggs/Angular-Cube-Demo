//console.log("rckSlideShow.js");
/**
 * Constructor
 * Closure pattern
 */
var SlideShow = function () {
    // private
    var controls, view;

    //var cube = $("#cube");
    /**
     * public
     * @format (JavaScript Object Notation)
     */
    return {


        update: function (params) {

            this.updateScreenTrans(cube,params);
            //var width, height;


//            console.log(obj);
//            $(obj).each(function () {
////                console.log(this);
//
//
////                $(".inner").css("width", this.width);
////                $(".side").css("width", this.width);
////
////                $(".inner").css("height", this.height);
////                $(".side").css("height", this.height);
//
//                var transform = "rotateX(" + this.rx + "deg) rotateY(" + this.ry + "deg)";
//                //$("#cube").css("transform", transform);
//
//
////                $(".front").css("transform", "translateZ(200px)");
////                $(".top").css("transform", "rotateX(90deg) translateZ(200px)");
////                $(".right").css("transform", "rotateY(90deg) translateZ(200px)");
////                $(".left").css("transform", "rotateY(-90deg) translateZ(200px)");
////                $(".bottom").css("transform", "rotateX(-90deg) translateZ(200px)");
////                $(".back").css("transform", "rotateY(-180deg) translateZ(200px)");
//
//            });

        },

         /**
         * Update the target element with dynamic parameters from the sliders
         */
        updateScreenTrans: function (ele,params) {
//            var css = this.update();
            var ele = document.getElementById("cube");
//             var outer = document.getElementById("outer");
//             $("#outer").css("height","400px");
            // var transform = "perspective(" + css.perspectiveControl + "px) scaleX(" + css.scalexControl + ") scaleY(" + css.scaleyControl + ") scaleZ(" + css.scalezControl + ") rotate(" + css.rotateControl + "deg) rotateX(" + css.rotatexControl + "deg) rotateY(" + css.rotateyControl + "deg) rotateZ(" + css.rotatezControl + "deg) skewX(" + css.skewxControl + "deg) skewY(" + css.skewyControl + "deg)";

            var transform = "scaleX(" +
                params.sx + ") scaleY(" +
                params.sy + ") scaleZ(" +
                params.sz + ") rotate(" +
                params.rt + "deg) rotateX(" +
                params.rx + "deg) rotateY(" +
                params.ry + "deg) rotateZ(" +
                params.rz + "deg) skewX(" +
                params.skx + "deg) skewY(" +
                params.sky + "deg)";

           //this.updateStyleTransform(ele, transform);
//console.log(ele);
//             console.log(transform);


             this.updateStyleTransform(ele,transform);
//            var transformOrig = css.xAxisLengthControl + "px " + css.yAxisLengthControl + "px";
//            this.updateStylePerspectiveOrigin(ele, transformOrig);
        },


//        updateStylePerspective: function (targetElement, perspective) {
//
//            console.log("perspective: " + perspective);
//
//            targetElement.style.webkitPerspective = perspective;
//            /* Saf3.1+, Chrome */
//            targetElement.style.MozPerspective = perspective;
//            /* FF3.5+ */
//            targetElement.style.msPerspective = perspective;
//            /* IE9 */
//            targetElement.style.OPerspective = perspective;
//            /* Opera 10.5+ */
//            targetElement.style.perspective = perspective;
//        },

        updateStyleTransform: function (ele, transform) {
            /* Saf3.1+, Chrome */
            ele.style.webkitTransform = transform;
            /* FF3.5+ */
            ele.style.MozTransform = transform;
            /* IE9 */
            ele.style.msTransform = transform;
            /* Opera 10.5+ */
            ele.style.OTransform = transform;
            ele.style.transform = transform;
        }

//        updateStylePerspectiveOrigin: function (ele, perspectiveOrigin) {
//            ele.style.perspectiveOrigin = perspectiveOrigin;
//        }


    };

};

