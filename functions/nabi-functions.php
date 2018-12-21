<?php
/**
 * nabi functions
 *
 * @package nabi
 */

if ( ! function_exists( 'nabi_is_wpml_activated' ) ) {
	/**
	 * Query WPML activation
	 */
	function nabi_is_wpml_activated() {
		return class_exists( 'SitePress' ) ? true : false;
	}
}

if ( ! function_exists( 'nabi_is_dev' ) ) {
	/**
	 * Check if dev
	 */
	function nabi_is_dev() {
		return strpos( $_SERVER['HTTP_HOST'], 'nabi-dev.com' ) ? true : false;
	}
}

if ( ! function_exists( 'nabi_language_code' ) ) {
	/**
	 * Get language code
	 */
	function nabi_language_code() {
		if ( nabi_is_wpml_activated() ) {
			$code = ICL_LANGUAGE_CODE;
		} else {
			$code = get_locale();
		}

		$code = substr( $code, 0, 2 );

		return $code;
	}
}

if ( ! function_exists( 'nabi_get_slug' ) ) {
	/**
	 * Get the current post slug
	 */
	function nabi_get_slug( $id ) {
		global $post;

		$post_id   = ( empty( $id ) ) ? $post->ID : $id;
		$post_data = get_post( $post_id, ARRAY_A );
		$slug      = $post_data['post_name'];

		return esc_attr( $slug );
	}
}

if ( ! function_exists( 'nabi_dump' ) ) {
	/**
	 * Custom var dump
	 */
	function nabi_dump( $var ) {
		echo '<pre>';
		var_dump( $var );
		echo '</pre>';
	}
}

if ( ! function_exists( 'nabi_date' ) ) {
	/**
	 * Custom translated date
	 */
	function nabi_date( $date ) {
		$date_arr = explode( '-', $date );
		$y = $date_arr[0];
		$m = $date_arr[1];
		$d = $date_arr[2];

		$m = ( substr( $m, 1 ) ) ? substr( $m, 1 ) : $m;

		$months = array(
			'',
			_x( 'janvier', 'nabi_date()', 'nabi' ),
			_x( 'février', 'nabi_date()','nabi' ),
			_x( 'mars', 'nabi_date()','nabi' ),
			_x( 'avril', 'nabi_date()','nabi' ),
			_x( 'mai', 'nabi_date()','nabi' ),
			_x( 'juin', 'nabi_date()','nabi' ),
			_x( 'juillet', 'nabi_date()','nabi' ),
			_x( 'août', 'nabi_date()','nabi' ),
			_x( 'septembre', 'nabi_date()','nabi' ),
			_x( 'octobre', 'nabi_date()','nabi' ),
			_x( 'novembre', 'nabi_date()','nabi' ),
			_x( 'décembre', 'nabi_date()','nabi' ),
		);

		$month = $months[$m];

		if ( nabi_language_code() == 'en' ) {
			return $month . ' ' . $d . ', ' . $y;
		} else {
			return $d . ' ' . $month . ' ' . $y;
		}
	}
}

// ACF Options pages
if(function_exists('acf_add_options_page')) {
	acf_add_options_page('Options');
}