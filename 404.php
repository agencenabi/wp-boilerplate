<?php get_header(); ?>

	<div class="_container">
		<div class="_row">
			<div class="_col">
				<h1><?php _e('Erreur - Page non trouvée', 'nabi'); ?></h1>
			</div>
		</div>
		<div class="_row">
			<div class="_col">
				<p><?php _e('Désolé, la page que vous avez demandée est introuvable.', 'nabi'); ?></p>
				<p><?php _e('Que faire maintenant ?', 'nabi'); ?></p>
			</div>
		</div>
		<div class="_row">
			<div class="_col">
				<p><?php _e('Le plus simple est de suivre ce lien pour vous rendre sur la', 'nabi'); ?> <a href="<?php echo home_url(); ?>"><?php _e('page d’accueil', 'nabi'); ?></a>, <?php _e('mais vous pouvez également vous rendre directement sur une de nos sections en utilisant le menu ci-haut.', 'nabi'); ?></p>
				<p><?php _e('Dans le cas où vous seriez arrivé ici alors que vous suiviez un lien provenant d’un autre site web, vous pouvez', 'nabi'); ?> <a href="<?php _e('/contact', 'nabi'); ?>"><?php _e('nous contacter', 'nabi'); ?></a> <?php _e('pour nous signaler cette erreur.', 'nabi'); ?></p>
			</div>
		</div>
	</div>

<?php get_footer(); ?>