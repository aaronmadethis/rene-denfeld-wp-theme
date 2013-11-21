<?php
	/* ----- CONTACT Template ----- */
?>

<section id="biography-page-wrapper" class="clearfix">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<aside class="float-left grid_3">
				<div class="inside">
					<?php
						$image_id = get_post_thumbnail_id();
						$page_img = wp_get_attachment_image_src($image_id, 'sidebar-full');
						$args = array(
							'post_type' => 'attachment',
							'numberposts' => -1,
							'post_status' => null,
							'post_parent' => $post->ID
						);

						$attachments = get_posts( $args );
						echo '<img src="' . $page_img[0] . '" alt="' . get_the_title() . '" />';
						echo '<span><a href=" http://www.garynormanphotography.com" target="_blank">' . $attachments[0]->post_excerpt . '</a></span>';
					?>
				</div>
			</aside>
			<article class="float-left grid_6">
				<div class="inside">
					<div class="intro"><?php the_field('biography_intro'); ?></div>
					<div class="bio"><?php the_field('biography_text'); ?></div>
				</div>
			</article>

		<?php endwhile; ?>
	<?php endif; /*have_posts*/ ?>
</section>