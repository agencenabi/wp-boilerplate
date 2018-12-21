/*
	MOBILE MENU
	------

 */
;mobileMenu = (function($) {

	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		hamburger();
// 		hamburgerTouch();
	})();


	function hamburger() {
		$('.mobilenav__btn').click(function(){
			$('.mobilenav__overlay').toggleClass('open');
			$(this).toggleClass('open');
			$('.js-main-nav-wrap').toggleClass('open');

			if ( $(this).hasClass('open') ) {
				var top = $(window).scrollTop();
				$('body').css({
					'left' : '-80%',
					'overflow-y' : 'hidden',
				});
				$('header').css('left', '-80%');
			} else {
				$('body').css({
					'left' : '0',
					'overflow-y' : 'visible',
				});
				$('header').css('left', '0%');
			}

		});

	}

	function hamburgerTouch() {
		$(document).bind( "mouseup touchend", function(e){

			hamburger();
			if ( $('.js-main-nav-wrap').hasClass('open') ) {
			    var menuContainer = $('.js-main-nav-wrap');
			    if (!menuContainer.is(e.target) && menuContainer.has(e.target).length === 0)  {
					$('.mobilenav__btn').toggleClass('open');
					$('.mobilenav__overlay').toggleClass('open');
					$('.js-main-nav-wrap').toggleClass('open');
			        $('body').css({
						'left' : '0',
						'overflow-y' : 'visible',
					});
					$('header').css('left', '0%');
			    }
			}
		});
	}

	/*
		Return public methods
	 */
	return {
		hamburger : hamburger,
	}


})(jQuery);