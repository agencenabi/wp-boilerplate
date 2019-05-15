<?php if( have_rows('testimonials') ): ?>

	<ul class="testimonials">

	<?php while( have_rows('testimonials') ): the_row(); 
		$text = get_sub_field('text');
		$name = get_sub_field('name');
		?>

		<li class="testimonial">
			<quote><?php echo $text; ?></quote>
		    <span class="author"><?php echo $name; ?></span>
		</li>

	<?php endwhile; ?>

	</ul>

<?php endif; ?>