/*
	HEADER
	------

	Set header classes on scroll.
	Available classes :
		"nav-down" : User is scrolling up, the nav is down
		"nav-up" : User is scrolling down, the nav is up
 */
;(function header($) {


	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {

		if ( $(window).scrollTop() >= 1 ) {
			didScroll = true;
			hasScrolled();
		}

	})();



	/**
	 * SCROLL
	 *
	*/
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = 0;
	var win = $(window).height();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        scrolledColor();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	        $('#menu-main-nav').css('padding-left', '5.313em');
	        $('.logo-small').fadeIn('fast');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	            $('.logo-small').fadeOut('fast');
	            $('#menu-main-nav').css('padding-left', '0');
	        }
	    }
	    lastScrollTop = st;
	}

	// Scrolled Color
	function scrolledColor() {
	    var header = $("header");
	    $(window).load(function() {
		    var scroll = $(window).scrollTop();
		    if (scroll >= 65) {
	            header.addClass("scrolled");
	        } else {
	            header.removeClass("scrolled");
	        }
	    });

	    $(window).scroll(function() {
		    var scroll = $(window).scrollTop();
	        if (scroll >= 65) {
	            header.addClass("scrolled");
	        } else {
	            header.removeClass("scrolled");
	        }
	    });
	}


})(jQuery);