/* Owl Carousel 2 All Settings. See the bottom for how to use equal heights with matchHeight  plugin */

jQuery(document).ready(function ($) {
  let owlWrapper = $("#owl-demo");

  owlWrapper.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,

    items: 3,
    loop: true,
    center: true,
    rewind: false,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,

    margin: 2,
    stagePadding: 0,

    merge: false,
    mergeFit: true,
    autoWidth: false,

    startPosition: 0,
    rtl: false,
    nav: true,
    navText: [
      '<div class="nav-btn prev-slide"><</div>',
      '<div class="nav-btn next-slide">></div></div>',
    ],

    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      705: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,

    fallbackEasing: "swing",

    info: false,

    nestedItemSelector: false,
    itemElement: "div",
    stageElement: "div",

    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
    autoHeight: false,
    lazyLoad: true,
  });

  $(".next").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl.trigger("owl.prev");
  });
});

// //  Code By Webdevtrick ( https://webdevtrick.com )
// jQuery(document).ready(function($) {
//         	"use strict";
// 	        $('#owl-demo').owlCarousel({
// 	            loop: true,
// 	            center: true,
// 	            items: 3,
// 	            margin: 0,
// 	            autoplay: true,
// 	            dots:true,
// 	            autoplayTimeout: 8500,
// 	            smartSpeed: 450,
// 	            responsive: {
// 	              0: {
// 	                items: 1
// 	              },
// 	              768: {
// 	                items: 2
// 	              },
// 	              1170: {
// 	                items: 3
// 	              }
// 	            }
// 	        });
//         	});
