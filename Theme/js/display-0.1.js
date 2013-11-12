jQuery(document).ready(function($) {
	var win_w = $(window).width(),
		win_h = $(window).height(),
		container_w = $("#grid-wrapper").width(),
		columns = 10,
		device_o = 'desktop';
	
	/* ---------------------------------------------------------------------------------------
	TEST ORIENTATION OF TABLET AND PHONE
	--------------------------------------------------------------------------------------- */
	function doOnOrientationChange(){
		switch(window.orientation){  
			case -90:
			case 90:
				$('body').addClass('landscape').removeClass('portrait');
				device_o = 'landscape';
				break; 
			case 0:
				$('body').addClass('portrait').removeClass('landscape');
				device_o = 'portrait';
				break; 
		}
		container_w = $("#grid-wrapper").width();
		viewport_test();
	}

	window.addEventListener('orientationchange', doOnOrientationChange);
	doOnOrientationChange();

	function viewport_test(){
		if( win_w > 1300)
			columns = 10;

		if( 1024 <= win_w && win_w < 1300 )
			columns = 8;
		
		if( 768 <= win_w && win_w < 1024 )
			columns = device_o !== 'portrait' ? 6 : 4;

		if( 480 <= win_w && win_w < 768 )
			columns = 4;

		if( 320 < win_w && win_w < 480 )
			columns = 2;

		if( 320 >= win_w )
			columns = device_o !== 'portrait' ? 2 : 1;

		set_grid();
	}

	function set_grid(){
		container_w = $("#grid-wrapper").width();


		var col_w = Math.floor( container_w / columns );
			//grid_w = col_w * columns,
			gutter = $('.inside').css('margin-left');
			gutter = gutter.slice(0, -2);
			gutter = Number( gutter * 2 );

		$('#grid-wrapper').css({"margin-top": 60 });
		$('.grid').css({width: '', 'margin-bottom': gutter});
		for (var i = 1; i < columns; i++) {
			$('.grid_' + i).css({'width': (col_w * i) });
		};

		$('#test').html('columns: ' + columns + ' / window width: ' + win_w  + ' / device: ' + device_o  + ' / gutter: ' + gutter);
		set_masonry();
	}
	viewport_test();

	/* ---------------------------------------------------------------------------------------
	BACKGROUND
	--------------------------------------------------------------------------------------- */
	function set_background(){
		$('#background-wrapper').css({width: win_w, height: win_h});
	}

	/* ---------------------------------------------------------------------------------------
	PROJECT MASONRY
	--------------------------------------------------------------------------------------- */
	function set_masonry(){
		if( $('#grid-wrapper').length > 0 ){
			var $root = $('#grid-wrapper');

			imagesLoaded( '#grid-wrapper', function() {
				console.log('images done');
				$root.masonry({
					columnWidth: '.mason-sizer',
					itemSelector: '.mason_box',
					gutter: 0
				});
			});
		}
	}
	set_masonry();

	/* ---------------------------------------------------------------------------------------
	WINDOW RESIZE
	--------------------------------------------------------------------------------------- */		
	var rtime = new Date(1, 1, 2000, 12,00,00),
		timeout = false;
		delta = 50;
		
	$(window).resize(function() {
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resize_end, delta);
	    }
	});

	function resize_end() {
	    if (new Date() - rtime < delta) {
	        setTimeout(resize_end, delta);
	    } else {
	        timeout = false;
	        win_w = $(window).width();
			viewport_test();
	    }               
	}

});

