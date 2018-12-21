<?php

//=============================================
//  ADD CUSTOM CSS / JS TO BACKEND
//=============================================
add_action( 'admin_enqueue_scripts', 'load_admin_style' );
function load_admin_style() {
    wp_register_style( 'admin_css', get_template_directory_uri() . '/assets/dist/css/admin.css', false, '1.0.0' );
	wp_enqueue_style( 'admin_css', get_template_directory_uri() . '/assets/dist/css/admin.css', false, '1.0.0' );

// 	wp_enqueue_script( 'admin_js', get_template_directory_uri() . '/assets/dist/js/admin.js', array( 'jquery' ), '1.0.0', true );
}

?>