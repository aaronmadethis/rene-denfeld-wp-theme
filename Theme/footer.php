<div class="clear"></div>
<section id="footer-wrapper">
	<footer>
	</footer>
</section>
<?php 
	$bg_img_id = get_field('background_image', 'options');
	$bg_img = wp_get_attachment_image_src( $bg_img_id, $size = 'background-full', $icon = false, $attr = '' );
?>

<div id="background-wrapper" style="background-image:url('<?php echo $bg_img[0] ?>');">
	<img src="<?php echo $bg_img[0] ?>" alt="" data-width="<?php echo $bg_img[1] ?>" data-height="<?php echo $bg_img[2] ?>" />
</div>

<?php wp_footer(); ?>
</body>
</html>