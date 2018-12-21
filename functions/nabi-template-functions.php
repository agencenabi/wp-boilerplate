<?php
/**
 * nabi template functions
 *
 * @package nabi
 */

if ( ! function_exists( 'nabi_paging_nav' ) ) {
	/**
	 * Display navigation to next/previous set of posts when applicable
	 */
	function nabi_paging_nav() {
		global $wp_query;

		$args = array(
			'type' 	    => 'list',
			'next_text' => _x( 'Suivant', 'Article suivant', 'nabi' ),
			'prev_text' => _x( 'Précédent', 'Article précédent', 'nabi' ),
		);

		the_posts_pagination( $args );
	}
}

if ( ! function_exists( 'nabi_post_nav' ) ) {
	/**
	 * Display navigation to next/previous post when applicable
	 */
	function nabi_post_nav() {
		$args = array(
			'next_text' => '%title',
			'prev_text' => '%title',
		);

		the_post_navigation( $args );
	}
}