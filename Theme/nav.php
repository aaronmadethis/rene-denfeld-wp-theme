<?php
	/* ----- Navigation Template ----- */
	$theme_dir_path = get_stylesheet_directory_uri();
?>
<section id="header-wrapper">
	<div id="buy-now">
		<a href="#">
			<span>BUY</span><img src="<?php echo $theme_dir_path ?>/images/icon-buy_now.png" width="37" height="31" /> <span>NOW</span>
		</a>
	</div>
	<header>
		<section id="nav-wrapper" >
			<nav class="clearfix">
				<div id="logo"><a href="<?php echo home_url(); ?>">RENE DENFLED</a></div>
				<?php wp_nav_menu( array( 'theme_location' => 'main', 'depth' => 1, 'container' => false ) ); ?>
			</nav>
		</section>
	</header>
</section>