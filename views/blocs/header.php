<div id="head" class="header js-header">
	<div class="_container">
		<div class="_row u-flex">

			<!-- Logo -->
			<div class="_col _col--xl-3 _col--md-6">
				<a class="pagelink logo__wrap menu__btn--home" href="<?php echo home_url(); ?>">
					<?php
						echo file_get_contents( get_template_directory_uri() . '/assets/dist/img/logo.svg');
					?>
				</a>
			</div>

			<!-- Mobile hamburger -->
			<div class="main-nav__hamburger">
				<div class="mobilenav__overlay"></div>
				<div class="mobilenav__btn"></div>
			</div>

			<!-- Menu -->
			<div class="_col _col--xl-9 _col--md-12 js-main-nav-wrap">

				<!-- Main Nav -->
				<div class="_col _col--xl-8 _col--md-12">
					<?php get_template_part( 'views/modules/main-nav' ); ?>
				</div>

				<!-- Secondary Nav -->
				<div class="_col _col--xl-4 _col--md-12">
					<?php get_template_part( 'views/modules/second-nav' ); ?>
				</div>

			</div>

		</div>
	</div>
</div>