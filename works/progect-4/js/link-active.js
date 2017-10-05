jQuery(document).ready(function($) {
	var str = $('.menu li:first-child a').attr('href');

	if(str.indexOf('index.html') + 1) {
	  $('.menu li:first-child a').css({
	    borderBottom:'solid 3px #fbab3d',
	  })
	}

});