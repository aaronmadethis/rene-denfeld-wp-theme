<?php
	/* ----- EVENTS Template ----- */
	$loop = new WP_Query(
		array(
			'post_type' => 'rd_events',
			'orderby' => 'menu_order',
			'order' => 'ASC',
			'posts_per_page' => -1,
		)
	);
?>

<section id="rd_events-page-wrapper">
	<ul id="grid-wrapper" class="float-left">
		<li class="grid_1 mason-sizer invisible"></li>
		<?php if ( $loop->have_posts() ) : ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
				<li class="grid_3 grid mason_box" >
					<article class="inside">
						<?php
							if(get_field('event_date')){
								$date = get_field('event_date');
								echo '<time class="date">' . $date . '</time>';
							}
						?>
						<div class="rule"></div>
						<?php
							if(get_field('event_description')){
								$description = get_field('event_description');
								echo '<div class="description">' . $description . '</div>';
							}
						?>
						<div class="location">
							<?php
								if(get_field('event_location')){
									$event_location = get_field('event_location');
									echo '<em>' . $event_location . '</em>';
								}
							?>
						</div>
					</article>
				</li>
			<?php endwhile; ?>
		<?php endif; /*have_posts*/ ?>
		<li class="grid_3 grid mason_box" >
			<article class="inside"><div class="date">Please check-in often as we schedule more events in Seattle, San Francisco, and at regional trade shows and libraries.</div></article>
		</li>
	</ul>
</section>