var played = false,
	new_bar = {w: 0, h: 0},
	org_bar = {w: 1010, h: 988},
	new_txt = {w: 0, h: 0},
	org_txt = {w: 1010, h: 65};

jQuery(document).ready(function($) {
	var win_w = $(window).width(),
		win_h = $(window).height(),
		container_w = $("#grid-wrapper").width(),
		columns = 12,
		device_o = 'desktop';
	
	/* ---------------------------------------------------------------------------------------
	TEST ORIENTATION OF TABLET AND PHONE
	--------------------------------------------------------------------------------------- */
	function doOnOrientationChange(){
		switch(window.orientation){  
			case Number(-90):
				$('body').addClass('landscape').removeClass('portrait');
				device_o = 'landscape';
				break; 
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
			columns = 9;

		if( 1024 <= win_w && win_w < 1300 )
			columns = 9;
		
		if( 768 <= win_w && win_w < 1024 )
			columns = device_o !== 'portrait' ? 9 : 6;

		if( 480 <= win_w && win_w < 768 )
			columns = 6;

		if( 320 < win_w && win_w < 480 )
			columns = 2;

		if( 320 >= win_w )
			columns = device_o !== 'portrait' ? 2 : 1;
		
		if( $('#grid-wrapper').length > 0 ){
			set_grid();
		}
	}

	function set_grid(){
		container_w = $("#grid-wrapper").width();


		var col_w = Math.floor( container_w / columns ),
			//grid_w = col_w * columns,
			grid_gutter = $('.inside').css('margin-left');
			grid_gutter = grid_gutter.slice(0, -2);
			grid_gutter = Number( grid_gutter * 2 );

		$('#grid-wrapper').css({"margin-top": 60 });
		$('.grid').css({width: '', 'margin-bottom': grid_gutter});
		for (var i = 1; i < columns; i++) {
			$('.grid_' + i).css({'width': (col_w * i) });
		};

		$('#test').html('columns: ' + columns + ' / window width: ' + win_w  + ' / device: ' + device_o  + ' / gutter: ' + grid_gutter);
		set_masonry();
	}
	viewport_test();

	/* ---------------------------------------------------------------------------------------
	BACKGROUND
	--------------------------------------------------------------------------------------- */
	function set_background(){
		$('#background-wrapper').css({width: win_w, height: win_h});
		var win_r = win_w / win_h,
			img_w = $('#background-wrapper img').attr('data-width'),
			img_h = $('#background-wrapper img').attr('data-height'),
			img_r = img_w / img_h;

		if(win_r > img_r){
			//window is wide
			$('#background-wrapper img').removeClass('vert').addClass('horz');
		}else{
			//window is high
			$('#background-wrapper img').removeClass('horz').addClass('vert');
		}
	}
	if( $('html.backgroundsize').length > 0 ){
		$('#background-wrapper img').remove();
	}else{
		set_background();
	}
	

	/* ---------------------------------------------------------------------------------------
	EVEN BOXES
	--------------------------------------------------------------------------------------- */
	function set_even_boxes(){
		if( $('#biography-page-wrapper').length > 0 && win_w > 480 ){
			$('#biography-page-wrapper .inside').attr('style', '');
			var parent_h = $('#biography-page-wrapper').height();
			$('#biography-page-wrapper .inside').css({height: parent_h-44});
		}
		if( $('#contact-page-wrapper').length > 0 && win_w > 480 ){
			$('#contact-page-wrapper .inside').attr('style', '');
			var parent_h = $('#contact-page-wrapper').height();
			$('#contact-page-wrapper .inside').css({height: parent_h-44});
		}
	}
	set_even_boxes();

	var tray_h = $('#buy-now .tray').height();

	function set_buy_now(){
		//$('#buy-now').css({top: -tray_h, height: 40});
		$('#buy-now .tray').css({'margin-top': tray_h * -1});
	}
	set_buy_now();

	$('#buy-now a.btn').hover(function(e){
		//$('#buy-now').stop(true, false).animate({top: 0}, {queue: false, duration: 250}).animate({height: 110}, 250 );
		$('#buy-now .tray').stop(true, false).animate({'margin-top': 0}, 250 );
		e.stopPropagation();
		e.preventDefault();
	});

	$('#buy-now .tray').mouseleave(function(e){
		$(this).stop(true, false).animate({'margin-top': tray_h * -1}, 250 );
		e.stopPropagation();
		e.preventDefault();
	});


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
	HOME ANIMATION
	--------------------------------------------------------------------------------------- */
	imagesLoaded( '.anime', function() {
		console.log('Images all loaded');
		set_positions();
	});

	function set_positions(){
		win_w = $(window).width();
		win_h = $(window).height();

		if(win_h < org_bar.h){
			new_bar.h = win_h - 161;
			new_bar.w = new_bar.h * (org_bar.w / org_bar.h);
			$('#bars').css({width: new_bar.w, height: new_bar.h, "margin-top": ((new_bar.h/2) * -1), "margin-left": (new_bar.w/2) * -1 });
			
			new_txt.w = new_bar.w + new_bar.w*0.2;
			new_txt.h = new_txt.w * (org_txt.h / org_txt.w);
			$('#rene_txt').css({width: new_txt.w, height: new_txt.h, "margin-top": (new_txt.h/2) * -1 , "margin-left": (new_txt.w/2) * -1 });
			$('#enchanted_txt').css({width: new_txt.w, height: new_txt.h, "margin-top": (new_txt.h/2) * -1, "margin-left": (new_txt.w/2) * -1 });
		}else{
			new_bar.w = org_bar.w;
			new_bar.h = org_bar.h;
			$('#bars').css({width: org_bar.w, height: org_bar.h, "margin-top": (org_bar.h/2) * -1, "margin-left": (org_bar.w/2) * -1 });
		}

		if(!played){
			played = true;
			setTimeout(rene_fadein, 500);
		}
	}

	function rene_fadein(){
		$('#rene_txt').css({'visibility': 'visible'}).stop(true, true).animate({opacity: 1},1000, function(){
			setTimeout(enchanted_crossfade, 700);
		});
	}

	function enchanted_crossfade(){
		$('#rene_txt').stop(true, true).animate({opacity: 0},1500, function(){
			$(this).css({'visibility': 'hidden'});
		});
		$('#enchanted_txt').css({'visibility': 'visible'}).stop(true, true).animate({opacity: 1},1500, function(){
			$('#bars').css({height: 0, 'margin-top': 0});
			setTimeout(bars_fadein, 700);
		});
	}

	function bars_fadein(){
		$('#bars').css({'visibility': 'visible'}).stop(true, true).animate({height: new_bar.h, 'margin-top': (new_bar.h/2) * -1, opacity:1},1500, function(){
		});
	}


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
	        if( $('html.backgroundsize').length === 0 ){
	        	set_background();
	    	}
			viewport_test();
			set_even_boxes();
			set_positions();
	    }               
	}

});

