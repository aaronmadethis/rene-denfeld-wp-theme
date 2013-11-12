<?php
	/* ----- Navigation Template ----- */
	$theme_dir_path = get_stylesheet_directory_uri();
?>
<div id="top-spacer"></div>
<section id="header-wrapper">
	<header>
		<div id="header-r-wrapper">
			<section id="nav-wrapper" >
				<nav class="clearfix">
					<div class="wp-menu"><?php wp_nav_menu( array( 'theme_location' => 'main', 'depth' => 1, 'container' => false ) ); ?></div>
				</nav>
			</section>
		</div>
	</header>
</section>