;(function($) {
	"use strict";

	var tabs = $('.ba-tabs a'),
		cont = $('.ba-content__tab');

	$('.ba-tabs').on('click', 'li', function(){

		tabs.removeClass('active');
		cont.removeClass('active');

		$(this).children('a').addClass('active');
		cont.eq($(this).index()).addClass('active');

	});


})(jQuery);

