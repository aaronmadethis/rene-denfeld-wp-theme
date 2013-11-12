<?php
global $post;
get_header();
get_template_part( 'nav' );

/*
$my_errors =yp_ajax_get_projects(20);
<div id="php_console" class="invisible">
	<?php var_dump($my_errors); ?>
</div>
*/
?>
<!-- <div id="test"></div> -->
<section id="page-wrapper">

	<?php if( is_home() || is_front_page() ): ?>
		<?php get_template_part( 'content', 'home' ); ?>

	<? elseif( is_page() ) : ?>
		<?php get_template_part( 'content', get_post( $post->ID )->post_name );
	?>

	<?php else : ?>
		<?php get_template_part( 'content', 'single' ); ?>

	<?php endif; /*is_home*/ ?>
	
</section><!-- end of page-wrapper -->

<?php get_footer(); ?>