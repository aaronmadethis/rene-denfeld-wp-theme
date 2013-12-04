<?php
	/* ----- Navigation Template ----- */
	$theme_dir_path = get_stylesheet_directory_uri();
?>
<section id="header-wrapper">
	<div id="buy-now">
		<div class="tray">
			<span class="buy-amazon"><a href="http://www.amazon.com/The-Enchanted-Novel-Rene-Denfeld/dp/0062285505/ref=sr_1_1?ie=UTF8&qid=1385401988&sr=8-1&keywords=the+enchanted+rene+denfeld" target="_blank"><img src="<?php echo $theme_dir_path ?>/images/buy-amazon.png" width="86" height="17" /></a></span>
			<span class="buy-goodreads"><a href="http://www.goodreads.com/book/show/17936636-the-enchanted?from_search=true" target="_blank"><img src="<?php echo $theme_dir_path ?>/images/buy-goodreads.png" width="84" height="18" /></a></span>
			<span class="buy-powells"><a href="http://www.powells.com/biblio/62-9780062285508-0" target="_blank"><img src="<?php echo $theme_dir_path ?>/images/buy-powells.png" width="73" height="24" /></a></span>
		</div>

		<a class="btn" href="#">
			<span>BUY</span><img src="<?php echo $theme_dir_path ?>/images/icon-buy_now.png" width="37" height="31" /> <span>NOW</span>
		</a>
	</div>
	<header>
		<section id="nav-wrapper" >
			<nav class="clearfix">
				<div id="logo"><a href="<?php echo home_url(); ?>">RENE DENFELD</a></div>
				<?php wp_nav_menu( array( 'theme_location' => 'main', 'depth' => 1, 'container' => false ) ); ?>
			</nav>
		</section>
	</header>
</section>