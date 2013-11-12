<div class="clear"></div>
<div id="footer-wrapper">
	<footer>
	</footer>
</div>
<?php 
	$bg_img_id = get_field('background_image', 'options');
	$bg_img = wp_get_attachment_image_src( $bg_img_id, $size = 'background-full', $icon = false, $attr = '' );
?>

<div id="background-wrapper"><img src="<?php echo $bg_img[0] ?>" alt="" width="<?php echo $bg_img[1] ?>" height="<?php echo $bg_img[2] ?>" /></div>

<?php wp_footer(); ?>
</body>
</html>