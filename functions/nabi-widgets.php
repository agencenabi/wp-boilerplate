<?php
/**
 * Register our sidebars and widgetized areas.
 *
 */
function nabi_widgets_init() {

	// Language Selector Widget
	register_sidebar( array(
		'name'          => 'Language Widget',
		'id'            => 'languagewidget',
		'before_title' => ''
	) );

	// Second nav additionnal content Widget
	register_sidebar( array(
		'name'          => 'Second Nav Widget',
		'id'            => 'secondnavwidget',
		'before_title' => ''
	) );

}
add_action( 'widgets_init', 'nabi_widgets_init' );
?>