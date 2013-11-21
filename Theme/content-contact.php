<?php
	/* ----- CONTACT Template ----- */
?>

<section id="contact-page-wrapper"  class="clearfix">
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

			<section class="float-left grid_6">
				<div class="inside">

				<?php if(get_field('contact_links')): ?>
					<article>
						<h1>Rene Denfeld</h1>
						<div class="icons">
						<?php 
						while(has_sub_field('contact_links')){
							$icon_id = get_sub_field('contact_icon');
							$icon_img = wp_get_attachment_image_src($icon_id, 'full');
							
							// 1 is email, 2 is facebook, 3 is other
							if(get_sub_field('contact_type') === 1){
								echo '<a href="mailto:' . get_sub_field('contact_link') . '">';
							}else{
								echo '<a href="' . get_sub_field('contact_link') . '">';
							}
							echo  '<img src="' . $icon_img[0] . '" width="15" height="15" /></a>';
						}
						?>
						</div>
					</article>
				<?php endif; ?>

				<article>
					<h1>Literary Agent</h1>
					<h2><?php the_field('literary_agent_title'); ?></h2>
					<div><?php the_field('literary_agent_address'); ?></div>
					<div><?php the_field('literary_agent_phone'); ?></div>
					<div class="icons"><a href="mailto:<?php the_field('literary_agent_email'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/icon-email.png" width="15" height="15" /></a></div>
				</article>

				<article>
					<h1>Publicist</h1>
					<h2><?php the_field('publicist_title'); ?></h2>
					<div><?php the_field('publicist_address'); ?></div>
					<div><?php the_field('publicist_phone'); ?></div>
					<div class="icons"><a href="mailto:<?php the_field('publicist_email'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/icon-email.png" width="15" height="15" /></a></div>
				</article>
				
				</div>
			</section>

		<?php endwhile; ?>
	<?php endif; /*have_posts*/ ?>
</section>