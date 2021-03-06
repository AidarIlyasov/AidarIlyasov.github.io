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


    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    $('.parallax-window').parallax({imageSrc: './assets/reflection-nebula-750x763.jpg'});

    $('.gallery-box').click(function(){
        var altImg = $(this).find('.img-responsive').attr("alt");
        var altImg = parseInt(altImg.replace(/\D+/g,""));

        var websiteLinks = ['https://day-task.firebaseapp.com/','1','https://opt-ovik.ru/','http://starta-spb.online/','https://osmos-tec.ru/'];

        var link = altImg >= 6 ? websiteLinks[altImg-6] : "./works/progect-" + altImg + "/index.html";

        $("#work-num").attr("href", link);
    });

      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '.first',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });

    $('.portfolioFilter button').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });


   // $("#mail-send").click(function(){

   //  var name = $(".contact-form").find("input[name='name']").val();
   //  var email = $(".contact-form").find("input[name='email']").val();
   //  var phone = $(".contact-form").find("input[name='phone']").val();
   //  var message = $(".contact-form").find("textarea[name='message']").val();

   //  fetch("http://test.ttestt.ru/call_form.php",{
   //      method: "post",
   //      body: JSON.stringify({name: name, email: email, phone: phone, message: message}),
   //      headers: {
   //        'Access-Control-Allow-Origin':'*',
   //        "Content-Type": "application/json",
   //        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type, text/html"
   //      },
   //      mode: 'cors'
   //      }).then(function(response){
   //        return response.json();
   //      }).then(function(resp){
   //        console.log(resp);
   //        alert('form submited')
   //      }).catch(function(err){
   //        $("#alertModal").modal();
   //      });

   //  console.log(`name ${name}, email${email}, phone ${phone}, message ${message}`);
   //  return false;
   // })
 
})(jQuery);
