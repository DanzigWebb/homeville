
 $(document).ready(function() {
            $("#my-menu").mmenu({
                extensions: ['effect-menu-slide', 'pagedim-black', "fx-listitems-fade", 'position-right'],
                navbar: {
                    //title: '<img src="/assets/img/main/logo-1.png">'
                },
            }, {
                // configuration
                offCanvas: {
                    pageSelector: "#my-page"
                }
            });

            var api = $('#my-menu').data('mmenu');
            api.bind('open:start', function() {
                $('.hamburger').addClass('is-active');
            });
            api.bind('close:before', function() {
                $('.hamburger').removeClass('is-active');
            })
        });

$(document).ready(function(){
    $('.gallery-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
                loop:true
            },
            600:{
                items:2,
                dots:false,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                dots:false,
                loop:false
            }
        }
    });
});