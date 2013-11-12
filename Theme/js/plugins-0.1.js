/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);


// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
// JavaScript Document
(function($){
	$.fn.preloader = function(user_options){
		
		var defaults = {
						delay:200,
						show_loader:true,
						preload_parent:"li",
						check_timer:300,
						ondone:function(){ },
						oneachload:function(image){  },
						fadein:500 
		};
		
		// variables declaration and precaching images and parent container
		var options = $.extend(defaults, user_options),
			root = $(this),
			images = root.find("img").css({"visibility":"hidden",opacity:0}),
			timer,
			counter = 0,
			i=0,
			checkFlag = [],
			delaySum = options.delay,
		 
			init = function(){
				
				timer = setInterval(function(){
					
					if(counter>=checkFlag.length){
						clearInterval(timer);
						options.ondone();
						return;
					}
				
					for(i=0;i<images.length;i++){
						if(images[i].complete==true){
							if(checkFlag[i]==false){
								checkFlag[i] = true;
								options.oneachload(images[i]);
								counter++;	
								delaySum = delaySum + options.delay;
							}
							$(images[i]).css("visibility","visible").delay(delaySum).animate({opacity:1},options.fadein,
							function(){ $(this).parent().removeClass("preloader");   });
						}
					}
				},options.check_timer) 
			};
		
		images.each(function(){
			if($(this).parent(options.preload_parent).length==0){
				if(options.show_loader)
					$(this).wrap("<a class='preloader' />");
			}else{
				if(options.show_loader)
					$(this).parent().addClass("preloader");
				checkFlag[i++] = false;
			}		
		}); 

		images = $.makeArray(images); 
		
		var icon = jQuery("<img />",{
				class : 'next' ,
				src : 'http://yp-yp.com/projects/wp-content/themes/YoungProfessionals/images/loading.gif'
			}).hide().appendTo("body");
			
		timer = setInterval(function(){
			
			if(icon[0].complete==true){
				clearInterval(timer);
				init();
				icon.remove();
				return;
			}
		},100);
	}
})( jQuery );


(function($){
	$.fn.vert_center = function(options){

		return this.each(function(){
			var root = $(this),
				root_h = root.height(),
				root_w = root.width(),
				h_offset = options != undefined ? options : 0,
				top_m = (root_h/2 - h_offset) * -1,
				left_m = (root_w/2) * -1;

			root.css({'margin-top': top_m, 'margin-left': left_m});
		});
	}
})( jQuery );


(function($){
	$.fn.yp_lightbox = function(custom_options){

		return this.each(function(){

			var root = $(this),
				wrapper = '<div id="lightbox-wrapper" class="hide"></div>',
				container = '<div id="lightbox-container" ></div>',
				link = root.find('a'),
				credits = root.find('img').attr('alt'),
				creditsBox = '<span>' + credits + '</span>',
				image_src = root.find('img').attr('src'),
				full_image = '<img src="' + image_src + '" >',

			init = function(){
				add_lightbox();
			},

			add_lightbox = function(){
				$('#page-wrapper').before( $(wrapper) );
				$('#lightbox-wrapper').css({"visibility": "visible"}).stop(true, false).animate({opacity: 1}, 500, function (){
					$('#lightbox-wrapper').addClass('preloader');
					$(this).prepend( $(container) );
					$("#lightbox-container").prepend( $(full_image) );
					add_close();

					$('#lightbox-container').preloader({
						delay:100,
						preload_parent:"div",
						show_loader:false,
						fadein:250, 
						oneachload: function(image){
							$('#lightbox-wrapper').removeClass('preloader');
							$('#lightbox-container').append( $(creditsBox) );

							$.fn.yp_lightbox.format_overlay();
							$(window).bind("scroll", function(e){
								$.fn.yp_lightbox.format_overlay();
							});
						}
					});
				});
			},

			add_close = function (){

				$('#lightbox-wrapper').click(function (){
					$(this).animate({opacity: 0}, 500, function (){
						$(window).unbind("scroll", function(e){
							$.fn.yp_lightbox.format_overlay();
						});
						$(this).remove();
					});
				});
			}

			init();

			$.fn.yp_lightbox.format_overlay = function(){
				var win_h = $(window).height(),
					lb_t_m = $('#header-wrapper').height() + 20,
					lb_h = win_h - lb_t_m,
					img_org_h = root.find('img').attr('data-org-h');

				$('#lightbox-container').css({'height': lb_h, 'top': lb_t_m });

				console.log('img_org_h', img_org_h );

				if( img_org_h >= lb_h )
				 	$('#lightbox-container img').addClass('smaller');

				var left_m = ($('#lightbox-container img').width()/2) * -1,
					top_m = Math.floor( (lb_h - $('#lightbox-container img').height())/2 - 15 );

				if(top_m < 0)
					top_m = 0;

				$('#lightbox-container img').css({'margin-left': left_m, 'margin-top': top_m});
				$('#lightbox-container span').css({width: $('#lightbox-container img').width() });
			}

		});
	}

})( jQuery );