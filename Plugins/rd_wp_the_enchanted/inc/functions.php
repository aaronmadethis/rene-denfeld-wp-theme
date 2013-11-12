<?php

// -- register install script
register_activation_hook(__FILE__, 'rd_wp_enchanted_install');

// -- register the deactivation script
register_deactivation_hook(__FILE__, 'rd_wp_enchanted_deactivate');

// -- runs when plug-in is installed
function rd_wp_enchanted_install(){
}

// -- run on uninstall deletes options
function rd_wp_enchanted_deactivate() {
	// -- delete options
	// -- delete_option('total_columns');
}

// Load our custom assets.
add_action( 'admin_enqueue_scripts', 'rd_wp_enchanted_assets');

function rd_wp_enchanted_assets(){

}

// -- Set up the post types
add_action('init', 'rd_wp_enchanted_regiser_post_types');

// -- Register Post Types function
function rd_wp_enchanted_regiser_post_types(){

	// -- set arguments for the portfolio_page post type
	$rd_wp_pt_args = array(
		'public' => true,
		'query_var' => 'rd_enchanted',
		'rewrite' => array(
				'slug' => 'rene-denfeld/enchanted',
				'with_front' => false
		),
		'supports' => array(
			'title',
			'page-attributes',
			'thumbnail' 
		),
		'labels' => array(
			'name' => 'The Enchanted Reviews',
			'singular_name' => 'The Enchanted Review',
			'add_new' => 'Add a The Enchanted Review',
			'add_new_item' => 'Add a The Enchanted Review',
			'edit_item' => 'Edit a The Enchanted Review',
			'new_item' => 'New The Enchanted Review',
			'view_item' => 'View The Enchanted Review',
			'search_items' => 'Search The Enchanted Review',
			'not_found' => 'No The Enchanted Reviews Found',
			'not_found_in_trash' => 'No The Enchanted Reviews Found in Trash'
		),
		'capability_type' => 'page',
		'hierarchical' => true,
        // 'register_meta_box_cb' => 'add_portfolio_metaboxes',
        'taxonomies' => array( 'category', 'post_tag' ),
        'has_archive'   => true,
	);

	// -- register the portfolio post type
	register_post_type( 'rd_enchanted', $rd_wp_pt_args );
}

