(function($) {
    "use strict";
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // $('.navbar-collapse ul li a').click(function() {
    //      always close responsive nav after click 
    //     $('.navbar-toggle:visible').click();
    // });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    $('.parallax-window').parallax({imageSrc: './assets/reflection-nebula-750x763.jpg'});

    $('.gallery-box').click(function(){
        var altImg = $(this).find('.img-responsive').attr("alt");
        var altImg = parseInt(altImg.replace(/\D+/g,""));

        var lorem = $("#work-num").attr("href", "./works/progect-" + altImg + "/index.html");
    });
    
})(jQuery);
