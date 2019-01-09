<?php
/**
 * WP Custom engine room
 *
 * @package nabi
 */
require_once 'functions/nabi-ajax.php';
require_once 'functions/nabi-assets.php';
require_once 'functions/nabi-functions.php';
require_once 'functions/nabi-media.php';
require_once 'functions/nabi-post-types.php';
require_once 'functions/nabi-security.php';
require_once 'functions/nabi-template-functions.php';
require_once 'functions/nabi-widgets.php';
require_once 'functions/nabi-map.php';

// WP-Admin Functions
require_once 'functions/admin/nabi-login.php';
require_once 'functions/admin/nabi-admin-assets.php';
require_once 'functions/admin/nabi-menu.php';
require_once 'functions/admin/nabi-remove.php';
require_once 'functions/admin/nabi-duplicate.php';

/**
 * Assign the nabi version to a var
 */
$theme          = wp_get_theme( 'nabi' );
$nabi_version = $theme['Version'];

$nabi = (object) array(
	'version' => $nabi_version,

	/**
	 * Initialize all the things
	 */
	'main' => require_once 'functions/admin/nabi-admin.php'
);
