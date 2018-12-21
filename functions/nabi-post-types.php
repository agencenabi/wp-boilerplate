<?php
/* ====================================================================================================
	CUSTOM POST TYPES
	
	Most frequently used menu_icons (WP Dashicons)
	- User: dashicons-admin-users
	- Gear: dashicons-admin-generic
	- Media: dashicons-admin-media
	- Page: dashicons-format-aside
	- Jobs/Nametag: dashicons-nametag
	- Calendar: dashicons-calendar-alt
	
==================================================================================================== */

function codex_custom_init() {

	// Default Post Type
/*
	register_post_type( 'custompost1',
		array(
			'labels' => array(
				'name' 		=> __( 'CPT 1' ),
				'singular_name' => __( 'CPT 1' )
			),
			'public' 	=> true,
			'menu_icon'	=> 'dashicons-forms',
			'has_archive' 	=> true,
			'supports' 	=> array( 'title', 'editor', 'thumbnail' ),
			'rewrite' 	=> array( 'slug' => 'cpt1-custom-slug' ),
		)
	);
*/
	// Post Type Ready for REST API
	// Posts JSON can be access from localhost/wp-json/wp/v2/custompost2
/*
	register_post_type( 'custompost2',
		array(
			'labels' => array(
				'name' 		=> __( 'CPT 2' ),
				'singular_name' => __( 'CPT 2' )
			),
			'public' 	=> true,
			'menu_icon'	=> 'dashicons-forms',
			'has_archive' 	=> true,
			'supports' 	=> array( 'title', 'editor', 'thumbnail' ),
			'rewrite' 	=> array( 'slug' => 'cpt2-custom-slug' ),
			'show_in_rest' 	=> true,
			'rest_base'     => 'custompost2',
		)
	);
*/	

}

add_action( 'init', 'codex_custom_init' );


/* ====================================================================================================
	CUSTOM TAXONOMIES
==================================================================================================== */
/*
function nabi_custom_taxonomies() {

	// Retailer Provinces
	$labels = array(
		'name'		=> 'Province',
		'singular_name'	=> 'Province',
		'menu_name'	=> 'Province',
	);

	$args = array(
		'hierarchical'	    => true,
		'labels'	    => $labels,
		'show_admin_column' => true
	);

	register_taxonomy('province', array('retailers'), $args);

}
add_action('init', 'nabi_custom_taxonomies', 0);
*/

?>
