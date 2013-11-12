<?php
	/* ----- Single Template ----- */
?>
<section id="single-wrapper">
	<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article>
					<?php
						$image_id = get_post_thumbnail_id();
						$sm_img = wp_get_attachment_image_src($image_id, 'post-thumbnail');
						$bg_img = wp_get_attachment_image_src($image_id, 'full');
					?>
					<?php
						if(get_field('video')){
							$video_url = get_field('video');
							$embed_code = wp_oembed_get( $video_url, array('width'=>636) );
							echo $embed_code;
						}
					?>
					<img class="full" src="<?php echo $bg_img[0]; ?>" />
					<p>
						<?php
							if(function_exists('like_counter_p')) { like_counter_p('like'); }
						?>
						<?php
							if(function_exists('dislike_counter_p')) { dislike_counter_p('dislike'); }
						?>
					</p>
				</article>
			<?php endwhile; ?>
		<?php endif; /*have_posts*/ ?>
</section>