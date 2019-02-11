<?php

//=============================================
//  CUSTOM WP LOGIN PAGE
//=============================================
function nabi_login_page() { ?>
    <style type="text/css">
        body.login {
			background: black;
		}
		.login h1 a {
			background-image: none !important;
			padding-bottom: 10px;
			height: 0;
			width: 0;
			margin: 0;
		}
		.login h1 {
			background: url('<?php get_template_directory_uri(); ?>/assets/dist/img/login-logo.png') no-repeat scroll center center / auto 100%;
			width: 100%;
			height: 50px;
		}
		.login form {
			border-radius: 10px;
			-webkit-box-shadow: none !important;
			box-shadow: none !important;
		}
		#wp-submit {
			background: #2B2F39 !important;
			border: none;
			border-radius: 0;
			text-shadow: none;
			-webkit-box-shadow: none !important;
			box-shadow: none !important;
		}
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'nabi_login_page' );

?>
