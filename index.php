<?php get_header(); ?>

<div class="container">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<a href="<?php the_permalink(); ?>">
			<?php the_title(); ?>
		</a>

		<?php endwhile; else: ?>
	<?php endif; ?>
</div>

<?php get_footer(); ?>