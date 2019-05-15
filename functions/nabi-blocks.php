<?php
	
	/**
	 * nabi ACF Blocks
	 *
	 * @package nabi
	 */
	
	
	add_action('acf/init', 'my_acf_init');
	function my_acf_init() {
		
		// check function exists
		if( function_exists('acf_register_block_type') ) {
			
			// register the testimonial block
			acf_register_block_type(array(
			    'name'              => 'testimonial',
			    'title'             => __('Testimonial'),
			    'description'       => __('A custom testimonial block.'),
			    'render_template'   => get_template_directory() . '/views/blocs/testimonials/testimonials.php',
			    'enqueue_style' 	=> get_template_directory_uri() . '/views/blocs/testimonials/testimonials.css',
			));
			
			// register the contact form block
			acf_register_block_type(array(
			    'name'              => 'contactform',
			    'title'             => __('Contact Form'),
			    'description'       => __('Contact form bloc'),
			    'render_template'   => get_template_directory() . '/views/blocs/contactform/contactform.php',
			));
			
		}
	}
	
?>