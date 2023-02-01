;(function () 
{
	'use strict';
	$(function()
	{
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		darkModeToggle();
		// mousePos();
		scrollParallax();
		mobileOpt();
	});

	var isDevice = 
	{
		Android: function() 
		{
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() 
		{
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() 
		{
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() 
		{
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() 
		{
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() 
		{
			return (isDevice.Android() || isDevice.BlackBerry() || isDevice.iOS() || isDevice.Opera() || isDevice.Windows());
		}
	};
	var isMobile = () => { return ( isDevice.Android() || isDevice.iOS() ) !== null ? true :false; }

	var mobileMenuOutsideClick = ()=> 
	{
		$(document).click(function (e) 
		{
	    var container = $("#fh5co-offcanvas, .js-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				if ( $('body').hasClass('offcanvas') ) 
				{
					$('body').removeClass('offcanvas');
					$('.js-nav-toggle').removeClass('active');
				}
			}
		});
	};


	var offcanvasMenu = ()=> 
	{
		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		// var clone2 = $('.menu-2 > ul').clone();
		// $('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function()
		{
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function()
		{

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function()
		{
			if ( $('body').hasClass('offcanvas') ) 
			{
    			$('body').removeClass('offcanvas');
    			$('.js-nav-toggle').removeClass('active');
	    	}
		});
	};

	var burgerMenu = ()=> 
	{

		$('body').on('click', '.js-nav-toggle', function(event)
		{
			var $this = $(this);
			if ( $('body').hasClass('overflow offcanvas') ) 
			{
				$('body').removeClass('overflow offcanvas');
			} else 
			{
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var contentWayPoint = ()=> 
	{
		var i = 0;
		$('.animate-box').waypoint( function( direction ) 
		{

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) 
			{
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function()
				{

					$('body .animate-box.item-animate').each(function(k)
					{
						var el = $(this);
						setTimeout( function () 
						{
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') 
							{
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') 
							{
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') 
							{
								el.addClass('fadeInRight animated-fast');
							} else 
							{
								el.addClass('fadeInUp animated-fast');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
				}, 100);
				
			}

		} , 
		{ offset: '85%' } );
	};

	var dropdown = ()=> 
	{
		if (isMobile())
			return;

		$('.has-dropdown').mouseenter(function()
		{
			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function()
		{
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};

	var goToTop = ()=> 
	{
		$('.js-gotop').on('click', function(event)
		{
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 250, 'easeInOutExpo');
			return false;
		});

		$(window).scroll(function()
		{
			var $win = $(window);
			if ($win.scrollTop() > 700 /* && $win.onscroll() */) 
			{
				$('.js-top').addClass('active');
			} else 
			{
				$('.js-top').removeClass('active');
			}

		});
	};

	// Loading page
	var loaderPage = ()=> 
	{
		$(window).on( 'DOMContentLoaded', function() {
			$(".loader").fadeOut("slow");
		});
	};

	var counter = ()=> 
	{
		$('.js-counter').countTo( {
			 formatter: function (value, options) 
			 {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = ()=> {
		if ($('#counter').length > 0 ) {
			$('#counter').waypoint( function( direction ) 
			{
				if( direction === 'down' && !$(this.element).hasClass('animated') ) 
				{
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , 
			{ offset: '90%' } );
		}
	};

	var sliderMain = ()=> {
	  	$('.flexslider').flexslider( {
			animation     : "fade",
			slideshowSpeed: 5000,
			directionNav  : true,
			start         : function() {
				setTimeout(function() {
					$('.slider-text, .blog-title-style').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text, .blog-title-style').addClass('animated fadeInUp');
				}, 500);
			},
			before: function() {
				setTimeout(function() {
					$('.slider-text, .blog-title-style').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text, .blog-title-style').addClass('animated fadeInUp');
				}, 500);
			}
	  	});
	};

	var darkModeToggle = ()=> {
		let darkMode = localStorage.getItem("darkMode");
		let title_back = document.getElementById("title-back");
		const title_col_light = title_back !== null ? title_back.getAttribute('light_col') : 'white';
		const title_col_dark = title_back !== null ? title_back.getAttribute('dark_col') : 'black';

		const enableDarkMode = () =>
		{
			$('body').addClass('dark-mode');
			localStorage.setItem("darkMode", "enabled");
			if ( title_back !== null )
				title_back.style.color = title_col_light !== null ? title_col_light : 'white';
		}
		
		const disableDarkMode = () => 
		{
			$('body').removeClass('dark-mode');
			localStorage.setItem("darkMode", "disabled");
			if ( title_back !== null )
				title_back.style.color = title_col_dark !== null ? title_col_dark : 'black';
		}
		
		if ( darkMode == "enabled" || ( darkMode != "disabled" && window.matchMedia('(prefers-color-scheme: dark)').matches ) )
		   enableDarkMode();
		else
			disableDarkMode();

		$('body').on( 'click', '.theme-toggle', function()
		{
			darkMode = localStorage.getItem("darkMode");
			if ( darkMode !== "enabled" )
				enableDarkMode();
			else 
				disableDarkMode();
		})
	}

	var mousePos = () => 
	{
		const root = document.documentElement;
		$('body').on('mousemove', evt => {
			let x = evt.clientX / innerWidth;
			let y = evt.clientY / innerHeight;
		
			root.style.setProperty('--mouse-x', x);
			root.style.setProperty('--mouse-y', y);
			
		})
	}
	var scrollParallax = () => 
	{
		// TODO: Make is smoother. really jittery on phones. 
		// if ( isMobile() ) return;
		
		let blog_main_art = document.getElementById("blog_main_art");
		if (blog_main_art === null) return;

		let page        = document.getElementById("page");
		let hero        = document.getElementById("hero");
		let title_front = document.getElementById("title-front");
		let title_back  = document.getElementById("title-back");
		let blog        = document.getElementById("blog");
			
		hero.style.maxHeight = 0;
		blog.style.opacity   = 0;
		blog.style.scale     = 0;

		var innerW = window.innerWidth;
		var innerH = window.innerHeight;
		
		var scroll_padding   = 50;
		var blog_tf_coef     = innerW > 1280 ? 0.2 : innerW > 768 ? 0.13 : 0.35;
		var titleScrollY_pad = innerW > 1280 ? 100 : innerW > 768 ? 50 : 30;
		var initTitleTopPad  = getPadding(title_front).top;

		window.addEventListener( 'resize', ()=> 
		{
			innerW = window.innerWidth;
			innerH = window.innerHeight;
			// blog_tf_coef     = innerW > 1280 ? 0.2 : innerW > 768 ? 0.13 : 0.35;
			// titleScrollY_pad = innerW > 1280 ? 100 : innerW > 768 ? 50 : 30;
			// initTitleTopPad  = getPadding(title_front).top;
		})

		
		var scroll = function (Y_val) {
			var scrollspeed  = innerW > 1280 ? Y_val*2 : Y_val;
			var Y_val_W_norm = scrollspeed/innerW;
			
			blog.style.opacity = Math.min( 1, easeInCubic( Y_val_W_norm, 0, 1, 1) );
			blog.style.scale   = Math.min( 1, easeOutCubic( Y_val_W_norm, 0, 1, 1) );
			if ( scrollspeed < innerW + scroll_padding )
			{
				// page.style.position          = 'fixed';
				page.style.transform          = 'translate3d(0,' + Y_val + 'px, 0)';
				blog.style.transform          = 'translate3d(0,' + - Math.min( innerH * blog_tf_coef, scrollspeed) + 'px, 0)';
				blog_main_art.style.transform = 'translate3d(' + scrollspeed + 'px, 0, 0)';
				title_front.style.transform   = 'translate3d(' + -scrollspeed + 'px, 0, 0)';
				title_front.style.paddingTop  = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
				title_back.style.paddingTop   = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
			}
		};

		
			var raf = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame;
			var $window = $(window);
			var lastScrollTop = $window.scrollTop();

			if (raf) {
				loop();
			}
		
		function loop() {
				var scrollTop = $window.scrollTop();
				if (lastScrollTop === scrollTop) {
					raf(loop);
					return;
				} else {
					lastScrollTop = scrollTop;
		
					// fire scroll function if scrolls vertically
					scroll(lastScrollTop);
					raf(loop);
				}
		}
		
		// window.addEventListener('scroll', ()=> {
		// 	var Y_val = window.scrollY;
		// 	requestAnimationFrame( ()=> 
		// 	{
		// 		var scrollspeed  = innerW > 1280 ? Y_val*2 : Y_val;
		// 		var Y_val_W_norm = scrollspeed/innerW;
				
		// 		blog.style.opacity = Math.min( 1, easeInCubic( Y_val_W_norm, 0, 1, 1) );
		// 		blog.style.scale   = Math.min( 1, easeOutCubic( Y_val_W_norm, 0, 1, 1) );
		// 		if ( scrollspeed < innerW + scroll_padding )
		// 		{
		// 			// page.style.position          = 'fixed';
		// 			page.style.transform          = 'translate3d(0,' + Y_val + 'px, 0)';
		// 			blog.style.transform          = 'translate3d(0,' + - Math.min( innerH * blog_tf_coef, scrollspeed) + 'px, 0)';
		// 			blog_main_art.style.transform = 'translate3d(' + scrollspeed + 'px, 0, 0)';
		// 			title_front.style.transform   = 'translate3d(' + -scrollspeed + 'px, 0, 0)';
		// 			title_front.style.paddingTop  = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
		// 			title_back.style.paddingTop   = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
		// 		}
		// 	});
		// })
	}

	var mobileOpt = () => 
	{
		if ( isMobile() )
		{
			let title     = document.getElementById("title");
			let font_size = title !== null ? title_front.getAttribute('font-size-mobile') : null;
			
			if( font_size !== null && screen.width < 768 )
			{
				title_front.setAttribute( 'style', 'font-size: ' + font_size );
			}
		}
	}

	function getOffset(el) {
		const rect = el.getBoundingClientRect();
		return {
			left: rect.left + window.scrollX,
			top : rect.top + window.scrollY
		};
	}
	
	function getPadding(element) {
		let parent       = element.parentNode;
		let parentHeight = parent.offsetHeight;
		let parentWidth  = parent.offsetWidth;

		let boxSizing     = window.getComputedStyle(element).boxSizing;
		let paddingTop    = parseFloat(window.getComputedStyle(element).paddingTop);
		let paddingBottom = parseFloat(window.getComputedStyle(element).paddingBottom);
		let paddingLeft   = parseFloat(window.getComputedStyle(element).paddingLeft);
		let paddingRight  = parseFloat(window.getComputedStyle(element).paddingRight);

		if (boxSizing === "border-box") {
			paddingTop    += parseFloat(window.getComputedStyle(element).borderTopWidth);
			paddingBottom += parseFloat(window.getComputedStyle(element).borderBottomWidth);
			paddingLeft   += parseFloat(window.getComputedStyle(element).borderLeftWidth);
			paddingRight  += parseFloat(window.getComputedStyle(element).borderRightWidth);
		}

		let paddingPercentageH = ((paddingTop + paddingBottom) / parentHeight) * 100;
		let paddingPercentageW = ((paddingLeft + paddingRight) / parentWidth) * 100;
		return {
			top    : paddingTop,
			bottom : paddingBottom,
			left   : paddingLeft,
			right  : paddingRight,
			percentH: paddingPercentageH,
			percentW: paddingPercentageW
		}
	 }

	function easeInCubic(t, b, c, d) {
		return c*(t/=d)*t*t + b;
	}
	function easeOutCubic(t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}
	function easeOutQuint(t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}
	
	function easeOutExpo( t, b, c, d ) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}
}());