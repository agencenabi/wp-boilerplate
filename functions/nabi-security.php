<?php
/**
 * FORCE LOGIN
 * -----------
 *
 * Block site from non-logged users, on developpement server
 */
/*
if ( ! function_exists( 'nabi_force_login' ) ) {
	function nabi_force_login() {
		if (!is_user_logged_in() && !strpos($_SERVER['REQUEST_URI'], 'wp-login.php') && nabi_is_dev()) {
			$currentUrl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
			wp_redirect(wp_login_url($currentUrl));
			exit;
		}
	}
	add_action('init', 'nabi_force_login');
}
*/

/**
 * EMAIL SPAM PROTECTION FOR BACKEND
 * ---------------------------------
 *
 * php : 		echo antispambot('info@company.com');
 * shortcode : 	[email]info@company.com[/email]
 */
function nabi_hide_mail($atts , $content = null ){
	if ( ! is_email ($content) )
		return;

	return '<a href="mailto:'.antispambot($content).'">'.antispambot($content).'</a>';
}
add_shortcode('email','nabi_hide_mail');
?>