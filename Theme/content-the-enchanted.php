<?php
	/* ----- THE ENCHANTED Template ----- */
	$loop = new WP_Query(
		array(
			'post_type' => 'rd_enchanted',
			'orderby' => 'menu_order',
			'order' => 'ASC',
			'posts_per_page' => -1,
		)
	);
?>

<section id="rd_enchanted-page-wrapper">
	<ul id="grid-wrapper" class="float-left">
		<li class="grid_1 mason-sizer invisible"></li>
		<?php if ( $loop->have_posts() ) : ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
				<li>
					<article class="inside">
						<?php
							if(get_field('quote')){
								$quote = get_field('quote');
								echo '<div class="quote"><span>&ldquo;</span>' . $quote . '<span>&rdquo;</span></div>';
							}
						?>
						<div class="rule"></div>
						<?php
							if(get_field('name')){
								$name = get_field('name');
								echo '<div class="quote_name">' . $name . '</div>';
							}
						?>
						<div class="caption">
							<?php
								if(get_field('caption_one')){
									the_field('caption_one');
								}
							?>
							<?php
								if(get_field('caption_two')){
									$caption_two = get_field('caption_two');
									echo '<em>' . $caption_two . '</em>';
								}
							?>
						</div>
					</article>
				</li>
			<?php endwhile; ?>
		<?php endif; /*have_posts*/ ?>
	</ul>
</section>