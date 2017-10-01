$('#toggle').click(function(){
    $('.header__right').toggleClass('active', 5000, "easeOutSine");
    $('.header__menu-toggle').toggleClass('-active');
});