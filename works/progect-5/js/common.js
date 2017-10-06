$(document).ready(function(){

	 $('.search-icon').click(function(){
	 	$('.popup-search').css({display:'block'});
	 });	

	 $('.close').click(function(){
	 	$('.popup-search').css({display:'none'});
	 });	

	 $('.info-title').click(function(){
	   $(this).find('.menu-icon').toggleClass('derg');	
	   $(this).next('.info-content').slideToggle();

	 })  
})
