<?php

// -- register install script
register_activation_hook(__FILE__, 'rd_wp_events_install');

// -- register the deactivation script
register_deactivation_hook(__FILE__, 'rd_wp_events_deactivate');

// -- runs when plug-in is installed
function rd_wp_events_install(){
}

// -- run on uninstall deletes options
function rd_wp_events_deactivate() {
	// -- delete options
	// -- delete_option('total_columns');
}

// Load our custom assets.
add_action( 'admin_enqueue_scripts', 'rd_wp_events_assets');

function rd_wp_events_assets(){

}

// -- Set up the post types
add_action('init', 'rd_wp_events_regiser_post_types');

// -- Register Post Types function
function rd_wp_events_regiser_post_types(){

	// -- set arguments for the portfolio_page post type
	$rd_wp_pt_args = array(
		'public' => true,
		'query_var' => 'rd_events',
		'rewrite' => array(
				'slug' => 'rene-denfeld/events',
				'with_front' => false
		),
		'supports' => array(
			'title',
			'page-attributes',
			'thumbnail',
			'page-attributes',
		),
		'labels' => array(
			'name' => 'Events',
			'singular_name' => 'Events',
			'add_new' => 'Add a Events',
			'add_new_item' => 'Add a Events',
			'edit_item' => 'Edit a Events',
			'new_item' => 'New Events',
			'view_item' => 'View Events',
			'search_items' => 'Search Events',
			'not_found' => 'No Events Found',
			'not_found_in_trash' => 'No Events Found in Trash'
		),
		'capability_type' => 'page',
		'hierarchical' => true,
        // 'register_meta_box_cb' => 'add_portfolio_metaboxes',
        'taxonomies' => array( 'category', 'post_tag' ),
        'has_archive'   => true,
	);

	// -- register the portfolio post type
	register_post_type( 'rd_events', $rd_wp_pt_args );
}

