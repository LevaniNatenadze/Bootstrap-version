$(document).ready(function ($) {
    "use trict";
    $('#customers-cards').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin:0,
        autoplay: false,
        dots: false,
        nav:true,
        smartSpeed: 450,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:  {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });

});