;(function () 
{
	'use strict';
	$(function()
	{
		darkModeToggle();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		// mousePos();
		scrollParallax();
		// scrollParallax_2();
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
	var isMobile = ()=> { return ( isDevice.Android() || isDevice.iOS() ) !== null ? true :false; }

	var mobileMenuOutsideClick = ()=> 
	{
		$(document).click(function (e) 
		{
	    var container = $("#offcanvas, .js-nav-toggle");
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
		$('#page').prepend('<div id="offcanvas" />');
		$('#page').prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#offcanvas').append(clone1);
		// var clone2 = $('.menu-2 > ul').clone();
		// $('#offcanvas').append(clone2);

		$('#offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#offcanvas')
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
		$(window).on( 'DOMContentLoaded', ()=> {
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

		const enableDarkMode = ()=>
		{
			$('body').addClass('dark-mode');
			localStorage.setItem("darkMode", "enabled");
			if ( title_back !== null )
				title_back.style.color = title_col_light !== null ? title_col_light : 'white';
		}
		
		const disableDarkMode = ()=> 
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

	var mousePos = ()=> 
	{
		const root = document.documentElement;
		$('body').on('mousemove', evt => {
			let x = evt.clientX / innerWidth;
			let y = evt.clientY / innerHeight;
		
			root.style.setProperty('--mouse-x', x);
			root.style.setProperty('--mouse-y', y);
			
		})
	}
	var scrollParallax = ()=> 
	{
		// TODO: Make is smoother, poor performance on phones.
		if ( isMobile() ) 
		{
			let title_front = document.getElementById("title-front");
			if (title_front !== null)
			{
				window.addEventListener('scroll', ()=> {
					requestAnimationFrame( ()=> {
						title_front.style.transform  = 'translateY(' + scrollY*0.15 + 'px';
					});
				})
			}
			return;
		}
		
		let blog_main_art = document.getElementById("blog_main_art");
		if (blog_main_art === null) return;

		let page        = document.getElementById("page");
		let blog        = document.getElementById("blog");
		let title_front = document.getElementById("title-front");
		let title_back  = document.getElementById("title-back");
			
		blog.style.opacity   = 0;
		blog.style.scale     = 0;

		var blog_Ypos_coef   = innerWidth >= 1280 ? 0.2 : innerWidth >= 1080 ? 0.1 : innerWidth >= 768 ? 0.13 : 0.35;
		var titleScrollY_pad = innerWidth >= 1280 ? 100 : innerWidth >= 768 ? 50 : 30;
		var initTitleTopPad  = getPadding(title_front).top;
		var imgScrollPad     = 20;

		window.addEventListener( 'resize', ()=> 
		{
			blog_Ypos_coef     = innerWidth > 1280 ? 0.2 : innerWidth > 768 ? 0.13 : 0.35;
			titleScrollY_pad = innerWidth > 1280 ? 100 : innerWidth > 768 ? 50 : 30;
		})
		
		window.addEventListener('scroll', ()=> {
			requestAnimationFrame( ()=> 
			{
				var imgScrollspeed = innerWidth > 1280 ? scrollY*2 : scrollY;
				var Y_val_W_norm   = Math.min(1, imgScrollspeed/innerWidth);
				
				blog.style.opacity             = Math.min( 1, easeInCubic( Y_val_W_norm*1.3, 0, 1, 1) );
				blog.style.scale               = Math.min( 1, easeOutCubic( Y_val_W_norm, 0, 1, 1) );
				title_front.style.paddingTop   = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
				title_back.style.paddingTop    = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
				title_back.style.paddingBottom = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad, 1) + 'px';
				
				if ( imgScrollspeed < innerWidth+imgScrollPad )
				{
					page.style.transform          = 'translate3d(0,' + scrollY + 'px, 0)';
					blog.style.transform          = 'translate3d(0,' + - Math.min( innerHeight * blog_Ypos_coef, imgScrollspeed) + 'px, 0)';
					blog_main_art.style.transform = 'translate3d(' + imgScrollspeed + 'px, 0, 0)';
					title_front.style.transform   = 'translate3d(' + -imgScrollspeed + 'px, 0, 0)';
				}
			});
		})
	}

	var scrollParallax_2 = ()=> 
	{
		// TODO: Make is smoother, poor performance on phones.
		if ( isMobile() ) 
		{
			let title_front = document.getElementById("title-front");
			document.getElementById("title-back").style.display = 'none';
			window.addEventListener('scroll', ()=> {
				requestAnimationFrame( ()=> {
					title_front.style.transform  = 'translateY(' + scrollY*0.15 + 'px';
				});
			})
			return;
		}
		
		let blog_main_art = document.getElementById("blog_main_art");
		if (blog_main_art === null) return;

		let title_front = document.getElementById("title-front");
		let title_back  = document.getElementById("title-back");
		let blog        = document.getElementById("blog");
			
		// blog_main_art.style.position = 'fixed';
		// title_back.style.position = 'fixed';

		blog.style.opacity   = 0;
		blog.style.scale     = 0;

		
		var blog_tf_coef     = innerWidth > 1280 ? 0.4 : innerWidth > 768 ? 0.8 : 0.4;
		var titleScrollY_pad = innerWidth > 1280 ? 100 : innerWidth > 768 ? 50 : 30;
		var initTitleTopPad  = getPadding(title_front).top;
		var imgScrollPad     = 20;

		window.addEventListener( 'resize', ()=> 
		{
			blog_tf_coef     = innerWidth > 1280 ? 0.2 : innerWidth > 768 ? 0.13 : 0.35;
			titleScrollY_pad = innerWidth > 1280 ? 100 : innerWidth > 768 ? 50 : 30;
		})
		
		window.addEventListener('scroll', ()=> {
			console.log( "scrolling" );
			requestAnimationFrame( ()=> 
			{
				// console.log( "animation update" );
				var imgScrollspeed  = innerWidth > 1280 ? scrollY*2 : scrollY;
				var Y_val_W_norm = Math.min(1, imgScrollspeed/innerWidth);
				
				blog.style.opacity = Math.min( 1, easeInCubic( Y_val_W_norm, 0, 1, 1) );
				blog.style.scale   = Math.min( 1, easeOutCubic( Y_val_W_norm, 0, 1, 1) );

				// console.log( /* 'Y_val_W_norm: ', */ Y_val_W_norm );
				// console.log( 'blog opacity: ', blog.style.opacity );
				// console.log( 'blog scale: ', blog.style.scale );
				// console.log( 'blog transform: ', blog.style.transform );
				title_front.style.paddingTop  = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad, 1) + 'px';
				title_back.style.paddingTop   = initTitleTopPad - easeOutCubic(Y_val_W_norm, 0, initTitleTopPad, 1) + 'px';

				if ( imgScrollspeed <= innerWidth+imgScrollPad )
				{
					blog.style.transform          = 'translate3d(0,' +  imgScrollspeed*blog_tf_coef + 'px, 0)';
					blog_main_art.style.transform = 'translate3d(' + imgScrollspeed + 'px,'+ scrollY + 'px, 0)';
					title_front.style.transform   = 'translate3d(' + -imgScrollspeed + 'px,' +'0px, 0)';
					title_back.style.transform    = 'translate3d(0,' + scrollY +'px, 0)';
				}
			});
		})
	}

	var mobileOpt = ()=> 
	{
		if ( isMobile() )
		{
			let title_front = document.getElementById("title-front");
			let font_size = title_front !== null ? title_front.getAttribute('font-size-mobile') : null;
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