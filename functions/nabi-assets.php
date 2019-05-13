<?php
//===========================================
//	POST THUMBNAILS
//===========================================
function nabi_thumbnails() {
	// Post thumbnails
	add_theme_support('post-thumbnails', array('post'));
	set_post_thumbnail_size(540, 395, true);

	// Inline images
	add_image_size('inline-img-default', 540, 395, true);
	add_image_size('inline-img-small', 480, 352, true);
	// Products
	add_image_size('product-teaser', 320, 185, false);
	add_image_size('product-full', 892, 602, false);
	add_image_size('product-slider', 720, 450, false);
	// Responsive
	add_image_size('max', 2000, 9999, false);
	add_image_size('tablet', 980, 9999, false);
	add_image_size('tablet-cropped', 980, 9999, true);
}
add_action('after_setup_theme', 'nabi_thumbnails');


//===========================================
//	EXCERPTS
//===========================================
function custom_excerpt_length( $length ) {
	return 15;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );


//===========================================
//	JQUERY MIGRATE
//	Don't load "jQuery migrate" when including
//	jQuery in frontend
//===========================================
function nabi_remove_jquery_migrate(&$scripts) {
	if (!is_admin()) {
		$scripts->remove('jquery');
	}
}
add_filter('wp_default_scripts', 'nabi_remove_jquery_migrate');


//=============================================
//	Async load
//=============================================
function async_scripts($url) {
    if ( strpos( $url, '#asyncload') === false )
        return $url;
    else if ( is_admin() )
        return str_replace( '#asyncload', '', $url );
    else
	return str_replace( '#asyncload', '', $url )."' async='async";
}
add_filter( 'clean_url', 'async_scripts', 11, 1 );


//===========================================
//	ENQUEUE CSS / JS
//===========================================
function nabi_assets() {
	$version = '1';

	// WPML unwanted CSS / JS
// 	wp_deregister_style('language-selector');
// 	wp_deregister_script('language-selector');

	// Woocommerce related CSS / JS
// 	wp_deregister_style('jquery-ui');

	// JS
	wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-latest.min.js', array(), $version, true);
// 	wp_enqueue_script('jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', array(), $version, true);
	wp_enqueue_script('bv-vendor', get_template_directory_uri() . '/assets/dist/js/vendor.min.js', array(), $version, true);
	wp_enqueue_script('bv-main', get_template_directory_uri() . '/assets/dist/js/functions.min.js', array(), $version, true);
	wp_enqueue_script('modernizr', get_template_directory_uri() . '/assets/dist/js/modernizr.min.js#asyncload', array('jquery'), $version, true);

}
add_action('wp_enqueue_scripts', 'nabi_assets');


//=============================================
//  SVG ICONS
//=============================================
function svgicon( $icon, $render = true ) {
	$html  = '<svg class="svg-icon" role="presentation">';
	$html .= '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/dist/img/icons.svg#' . $icon . '"></use>';
	$html .= '</svg>';

	if( $render ) {
		echo $html;

	} else {
		return $html;
	}
}


//=============================================
//  REMOVE WOOCOMMERCE CSS
//=============================================
// Remove each style one by one
add_filter( 'woocommerce_enqueue_styles', 'jk_dequeue_styles' );
function jk_dequeue_styles( $enqueue_styles ) {
	unset( $enqueue_styles['woocommerce-general'] );	// Remove the gloss
	unset( $enqueue_styles['woocommerce-layout'] );		// Remove the layout
	unset( $enqueue_styles['woocommerce-smallscreen'] );	// Remove the smallscreen optimisation
	return $enqueue_styles;
}

// Or just remove them all in one line
add_filter( 'woocommerce_enqueue_styles', '__return_false' );

?>