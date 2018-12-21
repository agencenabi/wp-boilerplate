/*
	PARALLAX
	------

	Adding a subtile parallax effect to background images

 */
;(function parallaxBg($) {

	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		parallax();
	})();


	function parallax() {
		if($(window).width() >= 992){
			$(window).scroll(function() {
				var scrollTop = $(window).scrollTop();
				var divam = 2;
				var position = scrollTop-70;

				$(".js-parallax").css({
					"background-position":"center top " + position/divam + "px"
				});

				var divam0 = -20;
				$(".js-parallax0").css({
					"background-position":"center "+scrollTop/divam0+"px"
				});

				var divam1 = -30;
				$(".js-parallax1").css({
					"background-position":"center bottom "+scrollTop/divam1+"px"
				});

				var divam2 = -30;
				$(".js-parallax2").css({
					"background-position":"center top "+scrollTop/divam2+"px"
				});

		    });
		} else if($(window).width() <= 991){
			// Parallax are disabled on mobile
		}
	}

	// Home page parallax
/*
	if ($('body').hasClass('home')) {

	}
*/


	// Call function on page resize
	$(window).on('resize', function(){
		parallax();
	});


	/*
		Return public methods
	 */
	return {
		parallax : parallax,
	}

})(jQuery);

