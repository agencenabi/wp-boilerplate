/*
	GO TO
	------
	Smooth scroll to a specific location in the page

 */
;(function goTo($) {

	//init wow effects
	new WOW().init();

	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		goToFunc();
	})();


	function goToFunc() {
		if($(window).width() >= 992){
			if( $( '.goto' ).length > 0 ) {
				$( '.goto[href^="#"]' ).on( 'click', function() {
					var me =$( this ),
						the_id = me.attr( 'href' );

					$( 'html, body' ).animate( {
						scrollTop: $( the_id ).offset().top-73
					}, 'slow' );

					return false;
				});
			}
		} else if($(window).width() <= 991){
			if( $( '.goto' ).length > 0 ) {
				$( '.goto[href^="#"]' ).on( 'click', function() {
					var me =$( this ),
						the_id = me.attr( 'href' );

					$( 'html, body' ).animate( {
						scrollTop: $( the_id ).offset().top-65
					}, 'slow' );

					return false;
				});
			}
		}
	}


	// Call function on page resize
	$(window).on('resize', function(){
		goToFunc();
	});


	/*
		Return public methods
	 */
	return {
		goToFunc : goToFunc,
	}


})(jQuery);
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
/*
	INLINE SVG
	------
	Replace images tags containing .svg with inline SVG

 */

;inlineSvg = (function($) {

	jQuery('img.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    jQuery.get(imgURL, function(data) {

	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});

})(jQuery);

// Disable automatic phone number detection on mobile devices, so the Fax numbers won't be clickable
// Add this in the <head>: <meta name="format-detection" content="telephone=no" />

;(function mobilePhoneNumber($) {

	// Define the user agent
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Trident/i.test(navigator.userAgent) ? true : false;

	if(isMobile) {
		$('.phone-number').each(function() {
			$(this).replaceWith(
				$('<a href="tel:' + this.innerHTML + '">' + this.innerHTML + '</a>')
			);
		});
	}

	/*
		Output Example:
		If on mobile device it will
		Replace: <span class="phone-number">819-349-8888</span>
		By: <a href="tel:819-349-8888">819-349-8888</a>
	*/

})(jQuery);

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvVG8uanMiLCJoZWFkZXIuanMiLCJpbmxpbmVTdmcuanMiLCJtb2JpbGVQaG9uZU51bWJlci5qcyIsIm1vYmlsZW1lbnUuanMiLCJwYXJhbGxheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXHRHTyBUT1xuXHQtLS0tLS1cblx0U21vb3RoIHNjcm9sbCB0byBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBwYWdlXG5cbiAqL1xuOyhmdW5jdGlvbiBnb1RvKCQpIHtcblxuXHQvL2luaXQgd293IGVmZmVjdHNcblx0bmV3IFdPVygpLmluaXQoKTtcblxuXHQvKipcblx0ICogSU5JVElBTElTRVxuXHQgKiAtLS0tLS0tLS0tXG5cdCAqXG5cdCAqIEByZXR1cm4ge3VuZGVmaW5lZH1cblx0ICovXG5cdChmdW5jdGlvbiBpbml0KCkge1xuXHRcdGdvVG9GdW5jKCk7XG5cdH0pKCk7XG5cblxuXHRmdW5jdGlvbiBnb1RvRnVuYygpIHtcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA+PSA5OTIpe1xuXHRcdFx0aWYoICQoICcuZ290bycgKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHQkKCAnLmdvdG9baHJlZl49XCIjXCJdJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbWUgPSQoIHRoaXMgKSxcblx0XHRcdFx0XHRcdHRoZV9pZCA9IG1lLmF0dHIoICdocmVmJyApO1xuXG5cdFx0XHRcdFx0JCggJ2h0bWwsIGJvZHknICkuYW5pbWF0ZSgge1xuXHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiAkKCB0aGVfaWQgKS5vZmZzZXQoKS50b3AtNzNcblx0XHRcdFx0XHR9LCAnc2xvdycgKTtcblxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKCQod2luZG93KS53aWR0aCgpIDw9IDk5MSl7XG5cdFx0XHRpZiggJCggJy5nb3RvJyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdCQoICcuZ290b1tocmVmXj1cIiNcIl0nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBtZSA9JCggdGhpcyApLFxuXHRcdFx0XHRcdFx0dGhlX2lkID0gbWUuYXR0ciggJ2hyZWYnICk7XG5cblx0XHRcdFx0XHQkKCAnaHRtbCwgYm9keScgKS5hbmltYXRlKCB7XG5cdFx0XHRcdFx0XHRzY3JvbGxUb3A6ICQoIHRoZV9pZCApLm9mZnNldCgpLnRvcC02NVxuXHRcdFx0XHRcdH0sICdzbG93JyApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdC8vIENhbGwgZnVuY3Rpb24gb24gcGFnZSByZXNpemVcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRcdGdvVG9GdW5jKCk7XG5cdH0pO1xuXG5cblx0Lypcblx0XHRSZXR1cm4gcHVibGljIG1ldGhvZHNcblx0ICovXG5cdHJldHVybiB7XG5cdFx0Z29Ub0Z1bmMgOiBnb1RvRnVuYyxcblx0fVxuXG5cbn0pKGpRdWVyeSk7IiwiLypcblx0SEVBREVSXG5cdC0tLS0tLVxuXG5cdFNldCBoZWFkZXIgY2xhc3NlcyBvbiBzY3JvbGwuXG5cdEF2YWlsYWJsZSBjbGFzc2VzIDpcblx0XHRcIm5hdi1kb3duXCIgOiBVc2VyIGlzIHNjcm9sbGluZyB1cCwgdGhlIG5hdiBpcyBkb3duXG5cdFx0XCJuYXYtdXBcIiA6IFVzZXIgaXMgc2Nyb2xsaW5nIGRvd24sIHRoZSBuYXYgaXMgdXBcbiAqL1xuOyhmdW5jdGlvbiBoZWFkZXIoJCkge1xuXG5cblx0LyoqXG5cdCAqIElOSVRJQUxJU0Vcblx0ICogLS0tLS0tLS0tLVxuXHQgKlxuXHQgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG5cdCAqL1xuXHQoZnVuY3Rpb24gaW5pdCgpIHtcblxuXHRcdGlmICggJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IDEgKSB7XG5cdFx0XHRkaWRTY3JvbGwgPSB0cnVlO1xuXHRcdFx0aGFzU2Nyb2xsZWQoKTtcblx0XHR9XG5cblx0fSkoKTtcblxuXG5cblx0LyoqXG5cdCAqIFNDUk9MTFxuXHQgKlxuXHQqL1xuXHR2YXIgZGlkU2Nyb2xsO1xuXHR2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XG5cdHZhciBkZWx0YSA9IDU7XG5cdHZhciBuYXZiYXJIZWlnaHQgPSAwO1xuXHR2YXIgd2luID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpe1xuXHQgICAgZGlkU2Nyb2xsID0gdHJ1ZTtcblx0fSk7XG5cblx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdCAgICBpZiAoZGlkU2Nyb2xsKSB7XG5cdCAgICAgICAgaGFzU2Nyb2xsZWQoKTtcblx0ICAgICAgICBzY3JvbGxlZENvbG9yKCk7XG5cdCAgICAgICAgZGlkU2Nyb2xsID0gZmFsc2U7XG5cdCAgICB9XG5cdH0sIDI1MCk7XG5cblx0ZnVuY3Rpb24gaGFzU2Nyb2xsZWQoKSB7XG5cdCAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG5cdCAgICBpZihNYXRoLmFicyhsYXN0U2Nyb2xsVG9wIC0gc3QpIDw9IGRlbHRhKVxuXHQgICAgICAgIHJldHVybjtcblxuXHQgICAgLy8gSWYgdGhleSBzY3JvbGxlZCBkb3duIGFuZCBhcmUgcGFzdCB0aGUgbmF2YmFyLCBhZGQgY2xhc3MgLm5hdi11cC5cblx0ICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3AgJiYgc3QgPiBuYXZiYXJIZWlnaHQpe1xuXHQgICAgICAgIC8vIFNjcm9sbCBEb3duXG5cdCAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ25hdi1kb3duJykuYWRkQ2xhc3MoJ25hdi11cCcpO1xuXHQgICAgICAgICQoJyNtZW51LW1haW4tbmF2JykuY3NzKCdwYWRkaW5nLWxlZnQnLCAnNS4zMTNlbScpO1xuXHQgICAgICAgICQoJy5sb2dvLXNtYWxsJykuZmFkZUluKCdmYXN0Jyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8vIFNjcm9sbCBVcFxuXHQgICAgICAgIGlmKHN0ICsgJCh3aW5kb3cpLmhlaWdodCgpIDwgJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcblx0ICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ25hdi11cCcpLmFkZENsYXNzKCduYXYtZG93bicpO1xuXHQgICAgICAgICAgICAkKCcubG9nby1zbWFsbCcpLmZhZGVPdXQoJ2Zhc3QnKTtcblx0ICAgICAgICAgICAgJCgnI21lbnUtbWFpbi1uYXYnKS5jc3MoJ3BhZGRpbmctbGVmdCcsICcwJyk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xuXHR9XG5cblx0Ly8gU2Nyb2xsZWQgQ29sb3Jcblx0ZnVuY3Rpb24gc2Nyb2xsZWRDb2xvcigpIHtcblx0ICAgIHZhciBoZWFkZXIgPSAkKFwiaGVhZGVyXCIpO1xuXHQgICAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0ICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0ICAgIGlmIChzY3JvbGwgPj0gNjUpIHtcblx0ICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsZWRcIik7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsZWRcIik7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0ICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdCAgICAgICAgaWYgKHNjcm9sbCA+PSA2NSkge1xuXHQgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxlZFwiKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxlZFwiKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fVxuXG5cbn0pKGpRdWVyeSk7IiwiLypcblx0SU5MSU5FIFNWR1xuXHQtLS0tLS1cblx0UmVwbGFjZSBpbWFnZXMgdGFncyBjb250YWluaW5nIC5zdmcgd2l0aCBpbmxpbmUgU1ZHXG5cbiAqL1xuXG47aW5saW5lU3ZnID0gKGZ1bmN0aW9uKCQpIHtcblxuXHRqUXVlcnkoJ2ltZy5zdmcnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcblx0ICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cignaWQnKTtcblx0ICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcblx0ICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xuXG5cdCAgICBqUXVlcnkuZ2V0KGltZ1VSTCwgZnVuY3Rpb24oZGF0YSkge1xuXG5cdCAgICAgICAgLy8gR2V0IHRoZSBTVkcgdGFnLCBpZ25vcmUgdGhlIHJlc3Rcblx0ICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKCdzdmcnKTtcblxuXHQgICAgICAgIC8vIEFkZCByZXBsYWNlZCBpbWFnZSdzIElEIHRvIHRoZSBuZXcgU1ZHXG5cdCAgICAgICAgaWYodHlwZW9mIGltZ0lEICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdpZCcsIGltZ0lEKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgY2xhc3NlcyB0byB0aGUgbmV3IFNWR1xuXHQgICAgICAgIGlmKHR5cGVvZiBpbWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBpbWdDbGFzcysnIHJlcGxhY2VkLXN2ZycpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIFJlbW92ZSBhbnkgaW52YWxpZCBYTUwgdGFncyBhcyBwZXIgaHR0cDovL3ZhbGlkYXRvci53My5vcmdcblx0ICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XG5cblx0ICAgICAgICAvLyBSZXBsYWNlIGltYWdlIHdpdGggbmV3IFNWR1xuXHQgICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XG5cblx0ICAgIH0sICd4bWwnKTtcblxuXHR9KTtcblxufSkoalF1ZXJ5KTtcbiIsIi8vIERpc2FibGUgYXV0b21hdGljIHBob25lIG51bWJlciBkZXRlY3Rpb24gb24gbW9iaWxlIGRldmljZXMsIHNvIHRoZSBGYXggbnVtYmVycyB3b24ndCBiZSBjbGlja2FibGVcbi8vIEFkZCB0aGlzIGluIHRoZSA8aGVhZD46IDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XG5cbjsoZnVuY3Rpb24gbW9iaWxlUGhvbmVOdW1iZXIoJCkge1xuXG5cdC8vIERlZmluZSB0aGUgdXNlciBhZ2VudFxuXHR2YXIgaXNNb2JpbGUgPSAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8VHJpZGVudC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyB0cnVlIDogZmFsc2U7XG5cblx0aWYoaXNNb2JpbGUpIHtcblx0XHQkKCcucGhvbmUtbnVtYmVyJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykucmVwbGFjZVdpdGgoXG5cdFx0XHRcdCQoJzxhIGhyZWY9XCJ0ZWw6JyArIHRoaXMuaW5uZXJIVE1MICsgJ1wiPicgKyB0aGlzLmlubmVySFRNTCArICc8L2E+Jylcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKlxuXHRcdE91dHB1dCBFeGFtcGxlOlxuXHRcdElmIG9uIG1vYmlsZSBkZXZpY2UgaXQgd2lsbFxuXHRcdFJlcGxhY2U6IDxzcGFuIGNsYXNzPVwicGhvbmUtbnVtYmVyXCI+ODE5LTM0OS04ODg4PC9zcGFuPlxuXHRcdEJ5OiA8YSBocmVmPVwidGVsOjgxOS0zNDktODg4OFwiPjgxOS0zNDktODg4ODwvYT5cblx0Ki9cblxufSkoalF1ZXJ5KTtcbiIsIi8qXG5cdE1PQklMRSBNRU5VXG5cdC0tLS0tLVxuXG4gKi9cbjttb2JpbGVNZW51ID0gKGZ1bmN0aW9uKCQpIHtcblxuXHQvKipcblx0ICogSU5JVElBTElTRVxuXHQgKiAtLS0tLS0tLS0tXG5cdCAqXG5cdCAqIEByZXR1cm4ge3VuZGVmaW5lZH1cblx0ICovXG5cdChmdW5jdGlvbiBpbml0KCkge1xuXHRcdGhhbWJ1cmdlcigpO1xuLy8gXHRcdGhhbWJ1cmdlclRvdWNoKCk7XG5cdH0pKCk7XG5cblxuXHRmdW5jdGlvbiBoYW1idXJnZXIoKSB7XG5cdFx0JCgnLm1vYmlsZW5hdl9fYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdCQoJy5tb2JpbGVuYXZfX292ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXHRcdFx0JCgnLmpzLW1haW4tbmF2LXdyYXAnKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG5cdFx0XHRpZiAoICQodGhpcykuaGFzQ2xhc3MoJ29wZW4nKSApIHtcblx0XHRcdFx0dmFyIHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdFx0JCgnYm9keScpLmNzcyh7XG5cdFx0XHRcdFx0J2xlZnQnIDogJy04MCUnLFxuXHRcdFx0XHRcdCdvdmVyZmxvdy15JyA6ICdoaWRkZW4nLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnaGVhZGVyJykuY3NzKCdsZWZ0JywgJy04MCUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ2JvZHknKS5jc3Moe1xuXHRcdFx0XHRcdCdsZWZ0JyA6ICcwJyxcblx0XHRcdFx0XHQnb3ZlcmZsb3cteScgOiAndmlzaWJsZScsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCdoZWFkZXInKS5jc3MoJ2xlZnQnLCAnMCUnKTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW1idXJnZXJUb3VjaCgpIHtcblx0XHQkKGRvY3VtZW50KS5iaW5kKCBcIm1vdXNldXAgdG91Y2hlbmRcIiwgZnVuY3Rpb24oZSl7XG5cblx0XHRcdGhhbWJ1cmdlcigpO1xuXHRcdFx0aWYgKCAkKCcuanMtbWFpbi1uYXYtd3JhcCcpLmhhc0NsYXNzKCdvcGVuJykgKSB7XG5cdFx0XHQgICAgdmFyIG1lbnVDb250YWluZXIgPSAkKCcuanMtbWFpbi1uYXYtd3JhcCcpO1xuXHRcdFx0ICAgIGlmICghbWVudUNvbnRhaW5lci5pcyhlLnRhcmdldCkgJiYgbWVudUNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgIHtcblx0XHRcdFx0XHQkKCcubW9iaWxlbmF2X19idG4nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXHRcdFx0XHRcdCQoJy5tb2JpbGVuYXZfX292ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXHRcdFx0XHRcdCQoJy5qcy1tYWluLW5hdi13cmFwJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdCAgICAgICAgJCgnYm9keScpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbGVmdCcgOiAnMCcsXG5cdFx0XHRcdFx0XHQnb3ZlcmZsb3cteScgOiAndmlzaWJsZScsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCgnaGVhZGVyJykuY3NzKCdsZWZ0JywgJzAlJyk7XG5cdFx0XHQgICAgfVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Lypcblx0XHRSZXR1cm4gcHVibGljIG1ldGhvZHNcblx0ICovXG5cdHJldHVybiB7XG5cdFx0aGFtYnVyZ2VyIDogaGFtYnVyZ2VyLFxuXHR9XG5cblxufSkoalF1ZXJ5KTsiLCIvKlxuXHRQQVJBTExBWFxuXHQtLS0tLS1cblxuXHRBZGRpbmcgYSBzdWJ0aWxlIHBhcmFsbGF4IGVmZmVjdCB0byBiYWNrZ3JvdW5kIGltYWdlc1xuXG4gKi9cbjsoZnVuY3Rpb24gcGFyYWxsYXhCZygkKSB7XG5cblx0LyoqXG5cdCAqIElOSVRJQUxJU0Vcblx0ICogLS0tLS0tLS0tLVxuXHQgKlxuXHQgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG5cdCAqL1xuXHQoZnVuY3Rpb24gaW5pdCgpIHtcblx0XHRwYXJhbGxheCgpO1xuXHR9KSgpO1xuXG5cblx0ZnVuY3Rpb24gcGFyYWxsYXgoKSB7XG5cdFx0aWYoJCh3aW5kb3cpLndpZHRoKCkgPj0gOTkyKXtcblx0XHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdHZhciBkaXZhbSA9IDI7XG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjcm9sbFRvcC03MDtcblxuXHRcdFx0XHQkKFwiLmpzLXBhcmFsbGF4XCIpLmNzcyh7XG5cdFx0XHRcdFx0XCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6XCJjZW50ZXIgdG9wIFwiICsgcG9zaXRpb24vZGl2YW0gKyBcInB4XCJcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dmFyIGRpdmFtMCA9IC0yMDtcblx0XHRcdFx0JChcIi5qcy1wYXJhbGxheDBcIikuY3NzKHtcblx0XHRcdFx0XHRcImJhY2tncm91bmQtcG9zaXRpb25cIjpcImNlbnRlciBcIitzY3JvbGxUb3AvZGl2YW0wK1wicHhcIlxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR2YXIgZGl2YW0xID0gLTMwO1xuXHRcdFx0XHQkKFwiLmpzLXBhcmFsbGF4MVwiKS5jc3Moe1xuXHRcdFx0XHRcdFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOlwiY2VudGVyIGJvdHRvbSBcIitzY3JvbGxUb3AvZGl2YW0xK1wicHhcIlxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR2YXIgZGl2YW0yID0gLTMwO1xuXHRcdFx0XHQkKFwiLmpzLXBhcmFsbGF4MlwiKS5jc3Moe1xuXHRcdFx0XHRcdFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOlwiY2VudGVyIHRvcCBcIitzY3JvbGxUb3AvZGl2YW0yK1wicHhcIlxuXHRcdFx0XHR9KTtcblxuXHRcdCAgICB9KTtcblx0XHR9IGVsc2UgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxKXtcblx0XHRcdC8vIFBhcmFsbGF4IGFyZSBkaXNhYmxlZCBvbiBtb2JpbGVcblx0XHR9XG5cdH1cblxuXHQvLyBIb21lIHBhZ2UgcGFyYWxsYXhcbi8qXG5cdGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2hvbWUnKSkge1xuXG5cdH1cbiovXG5cblxuXHQvLyBDYWxsIGZ1bmN0aW9uIG9uIHBhZ2UgcmVzaXplXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcblx0XHRwYXJhbGxheCgpO1xuXHR9KTtcblxuXG5cdC8qXG5cdFx0UmV0dXJuIHB1YmxpYyBtZXRob2RzXG5cdCAqL1xuXHRyZXR1cm4ge1xuXHRcdHBhcmFsbGF4IDogcGFyYWxsYXgsXG5cdH1cblxufSkoalF1ZXJ5KTtcblxuIl19
