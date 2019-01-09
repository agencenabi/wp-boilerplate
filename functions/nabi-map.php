<?php

/*
 * Google Maps Shortcode
 * To insert a map in a WordPress WYSIWYG field, add this shortdode with the right parameters: 
 * [map api_key="INSERT YOUR API KEY" id="your-map" coords="53.339381, -6.260405" zoom="15" type="satellite"]
 */

class GoogleMap_Shortcode {
	static $api_key = false;
	static function init() {
		add_shortcode('map', array(__CLASS__, 'render_shortcode'));
		add_action('wp_footer', array(__CLASS__, 'enqueue_map_javascript'));
	}
	static function render_shortcode($atts) {
		extract( shortcode_atts( array(
			'api_key' => false,
			'id' => 'map-canvas-1',
			'class' => '',
			'zoom' => '15',
			'coords' => '45.4172325, -72.1145572',
			'type' => 'roadmap',
			'width' => '100%',
			'height' => '480px'
		), $atts ) );
		if(!self::$api_key && $api_key) {
			self::$api_key = $api_key;
		}
		$return = "";
		$map_type_id = "google.maps.MapTypeId.ROADMAP";
		switch ($type) {
			case "roadmap":
				$map_type_id = "google.maps.MapTypeId.ROADMAP";
				break;
			case "satellite":
				$map_type_id = "google.maps.MapTypeId.SATELLITE";
				break;
			case "hybrid":
				$map_type_id = "google.maps.MapTypeId.HYBRID";
				break;
			case "terrain":
				$map_type_id = "google.maps.MapTypeId.TERRAIN";
				break;
		}
		if(self::$api_key) {
			$return = '<div id="'.$id.'" class="map-canvas '.$class.'" style="width:'.$width.';height:'.$height.';" ></div>';
			$return .= '<script type="text/javascript">';
			$return .= 'jQuery(document).on("ready", function(){ ';
			$return .= 'var options = { center: new google.maps.LatLng('.$coords.'),';
			$return .= 'zoom: ' . $zoom . ', mapTypeId: ' . $map_type_id . ' };';
			$return .= 'var map = new google.maps.Map(document.getElementById("'.$id.'"), options);';
			$return .= 'var marker = new google.maps.Marker({ position: new google.maps.LatLng('.$coords.'), map: map });';
			$return .= '});</script>';
		} else {
			$return = "<div><p>Please specify your Google Maps API key</p></div>";
		}
		return $return;
	}
	static function enqueue_map_javascript() {
		if ( ! self::$api_key )
			return;
		wp_enqueue_script( 'map-js',
			"https://maps.googleapis.com/maps/api/js?key=" . self::$api_key . "&sensor=true",
			"jquery"
		);
	}
}
GoogleMap_Shortcode::init();
?>
