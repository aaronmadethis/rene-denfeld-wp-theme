<?php
	/* ----- CONTACT Template ----- */
?>

<section id="biography-page-wrapper">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			
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
				echo '<img src="' . $page_img[0] . '" width="' . $page_img[1] . '" height="' . $page_img[2] . '" alt="' . get_the_title() . '" />';
				echo '<span>' . $attachments[0]->post_excerpt . '</span>';
			?>

			<article>
				<p><?php the_field('biography_intro'); ?></p>
				<p><?php the_field('biography_text'); ?></p>
			</article>

		<?php endwhile; ?>
	<?php endif; /*have_posts*/ ?>
</section>