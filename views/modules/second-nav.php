<div class="second-nav">
	
	<!-- Secondary Nav Additionnal content -->
	<?php if ( is_active_sidebar( 'secondnavwidget' ) ) : ?>
	    <?php dynamic_sidebar( 'secondnavwidget' ); ?>
	<?php endif; ?>


	<!-- Language Switcher -->
	<?php if ( is_active_sidebar( 'languagewidget' ) ) : ?>
	    <?php dynamic_sidebar( 'languagewidget' ); ?>
	<?php endif; ?>

</div>