<?php


	/* ====================================================================================================
		AJAX Load Products EXAMPLE
	==================================================================================================== */
/*
	function LoadProduitPromo(){

		$attribute = 'type-doffre';
		$value = 'promotions';

	    $args = array(
	        'post_type' => 'product',
			'posts_per_page' => -1,
			'orderby' => 'date',
			'order' => 'ASC',
			'tax_query' => array(
			    array(
			        'taxonomy'      => 'pa_' . $attribute,
			        'terms'         => $value,
			        'field'         => 'slug',
			        'operator'      => 'IN'
			    )
			),
		);

	    $loop = new WP_Query($args);

	    $out = '';

	    if ($loop -> have_posts()) :
		    $i = 1; while ($loop -> have_posts()) : $loop -> the_post();
		        $out .= ''.get_template_part( 'views/async/product').'';
		    $i++; endwhile;

	    endif;
	    wp_reset_postdata();
	    die($out);
	}

	add_action('wp_ajax_nopriv_LoadProduitPromo', 'LoadProduitPromo');
	add_action('wp_ajax_LoadProduitPromo', 'LoadProduitPromo');
*/


?>