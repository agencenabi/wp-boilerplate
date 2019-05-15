<?php get_header(); ?>
	
	<div class="_container">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			<?php endwhile; else: ?>
		<?php endif; ?>
	</div>

<?php get_footer(); ?>