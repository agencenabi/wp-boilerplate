<?php

//=============================================
// REORDER TABS
//=============================================

function custom_menu_order($menu_ord) {
    if (!$menu_ord) return true;

    return array(
	    //General
        'index.php', // Dashboard

		//Pages
        'edit.php?post_type=page', // Pages
        'edit.php?post_type=retailers', // CPT
        'edit.php?post_type=product', // CPT

        //Contenu
        'separator1', // First separator
        'upload.php', // Media
        'nav-menus.php', // Appearance
        'wpseo_dashboard', // Yoast
        'acf-options-options', // ACF Options

		// Administration
        'separator2', // Second separator
        'plugins.php', // Plugins
        'themes.php', // Apparence
        'users.php', // Users
        'tools.php', // Tools
        'options-general.php', // Settings
    );

}
add_filter( 'custom_menu_order', '__return_true' );
add_filter('menu_order', 'custom_menu_order');

?>