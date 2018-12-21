<?php
/**
 * Header template
 *
 * @since WP Custom 1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <meta name="format-detection" content="telephone=no">
	<meta name="theme-color" content="#003972" />
	<title><?php wp_title('|', true, 'right'); ?></title>

	<!-- Favicon -->
	<!-- Generate a new favicon on http://www.favicomatic.com -->
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/dist/img/favicon/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="&nbsp;"/>
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

	<style>
        <?php
            $inline_css_path = get_template_directory_uri() . '/assets/dist/css/inline.min.css';
            $inline_css = /* file_get_contents( 'https://fonts.googleapis.com/css?family=Karla:400,700' ) . */ file_get_contents( $inline_css_path );

            // Replace relative paths
            $inline_css = str_replace( '../fonts', '/wp-content/themes/nabi/assets/dist/fonts', $inline_css );
            $inline_css = str_replace( '../img', '/wp-content/themes/nabi/assets/dist/img', $inline_css );

            echo $inline_css;
        ?>
    </style>

    <script id="loadcss">
        (function(w){
            "use strict";w.loadCSS=function(e,t,n){var l,o=w.document.createElement("link");if(t)l=t;else if(w.document.querySelectorAll){var r=w.document.querySelectorAll("style,link[rel=stylesheet],script");l=r[r.length-1]}else l=w.document.getElementsByTagName("script")[0];var s=w.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",l.parentNode.insertBefore(o,t?l:l.nextSibling),o.onloadcssdefined=function(e){for(var t,n=0;n<s.length;n++)s[n].href&&s[n].href===o.href&&(t=!0);t?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=n||"all"}),o};

            loadCSS( '<?php echo get_template_directory_uri() . '/assets/dist/css/style.min.css'; ?>', document.getElementById( 'loadcss' ) );
        }(this));
    </script>

	<!-- Enable HTML5 tags -->
	<!--[if lt IE 9]>
		<script type="text/javascript" src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- MatchMedia polyfill (for enquire.js under IE9) -->
	<!--[if lte IE 9]>
		<script src="<?php echo get_template_directory_uri(); ?>/assets/dist/js/media.match.min.js"></script>
	<![endif]-->


	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
	<header>
		<?php get_template_part( 'views/modules/loading' ); ?>
		<?php get_template_part( 'views/blocs/header' ); ?>
	</header>