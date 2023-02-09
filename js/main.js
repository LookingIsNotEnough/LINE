;(function()
{
	'use strict';
	const body          = document.body;
	const html          = document.documentElement;
	const page          = document.getElementById("page");
	const blog          = document.getElementById("blog");
	const readBar       = document.getElementById('read-progress');
	const title_front   = document.getElementById("title-front");
	const title_back    = document.getElementById("title-back");
	const blog_main_art = document.getElementById("blog_main_art");
	const dispWd        = [768, 1080, 1280];

	let maxScrollY, imgScrollSpeed, imgScrollPct, blog_Ypos_coef, titleScrollY_pad, initTitleTopPad, imgScrollPad;

	$(function()
	{
		darkModeToggle();
		offcanvasMenu();
		hamburgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		// mousePos();
		scrollFX();
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

	var hamburgerMenu = ()=> 
	{
		$('body').on('click', '.js-nav-toggle', function(event)
		{
			var $this = $(this);
			if ( $('body').hasClass('overflow offcanvas') )
			{
				$('body').removeClass('overflow offcanvas');
				body.style.overflow = '';
			} 
			else 
			{
				$('body').addClass('overflow offcanvas');
				body.style.overflow = 'hidden';
			}
			$this.toggleClass('active');
			event.preventDefault();
		});

		// Remove menu is clicked on the document/outside the menu
		$(document).on('click', (e) => 
		{
	    var container = $("#offcanvas, .js-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				if ( $('body').hasClass('offcanvas') ) 
				{
					$('body').removeClass('offcanvas');
					$('.js-nav-toggle').removeClass('active');
					body.style.overflow = '';
				}
			}
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

		const scrollPopUpThresh = isMobile() ? 800 : 2000;
		$(window).scroll(function() {
			if (scrollY > scrollPopUpThresh)
				$('.js-top').addClass('active');
			else 
				$('.js-top').removeClass('active');
		});
	};

	// Loading page
	var loaderPage = ()=> 
	{
		$(window).on( 'DOMContentLoaded', ()=> {
			$(".loader").fadeOut("slow");
		});

		$(window).on( 'load', ()=> {
			$('#blog_main_art').fadeIn("slow");
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
	var scrollFX = ()=> 
	{
		
		// TODO: Make is smoother, poor performance on phones.
		if ( isMobile() ) 
		{
			if (title_front !== null)
			{
				title_back.style.display = 'none';
				window.addEventListener('scroll', ()=> {
					requestAnimationFrame( ()=> {
						title_front.style.transform  = 'translateY(' + scrollY*0.15 + 'px';
						updateProgressBar();
					});
				})
			}
			return;
		}
		
		if ( blog_main_art === null ) return;
		
		blog.style.opacity = 0;
		blog.style.scale   = 0;
		blog_Ypos_coef     = innerWidth >= dispWd[2] ? 0.2 : innerWidth >= dispWd[1] ? 0.1 : innerWidth >= dispWd[0] ? 0.13 : 0.35;
		titleScrollY_pad   = innerWidth >= dispWd[2] ? 100 : innerWidth >= dispWd[0] ? 50 : 30;
		initTitleTopPad    = getPadding(title_front).top;
		imgScrollPad       = 20;

		window.addEventListener( 'resize', ()=> 
		{
			blog_Ypos_coef   = innerWidth >= dispWd[2] ? 0.2 : innerWidth >= dispWd[0] ? 0.13 : 0.35;
			titleScrollY_pad = innerWidth >= dispWd[2] ? 100 : innerWidth >= dispWd[0] ? 50 : 30;
			updateProgressBar( innerWidth >= dispWd[2] ? innerWidth/2 : innerWidth, 2 );
		})
		
		window.addEventListener('scroll', ()=> {
			requestAnimationFrame( ()=> 
			{
				imgScroll();
				updateProgressBar( innerWidth >= dispWd[2] ? innerWidth/2 : innerWidth, 2 );
			});
		})
	}
	function imgScroll()
	{
		imgScrollSpeed = innerWidth >= dispWd[2] ? scrollY*2 : scrollY;
		imgScrollPct   = Math.min(1, imgScrollSpeed/innerWidth);
		
		blog.style.opacity           = Math.min( 1, easeInCubic( imgScrollPct*1.3, 0, 1, 1) );
		blog.style.scale             = Math.min( 1, easeOutCubic( imgScrollPct, 0, 1, 1) );
		title_front.style.paddingTop = initTitleTopPad - easeOutCubic(imgScrollPct, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';
		title_back.style.paddingTop  = initTitleTopPad - easeOutCubic(imgScrollPct, 0, initTitleTopPad - titleScrollY_pad, 1) + 'px';

		if ( imgScrollSpeed < innerWidth+imgScrollPad )
		{
			page.style.transform          = 'translate3d(0,' + scrollY + 'px, 0)';
			blog.style.transform          = 'translate3d(0,' + - Math.min( innerHeight * blog_Ypos_coef, imgScrollSpeed) + 'px, 0)';
			blog_main_art.style.transform = 'translate3d(' + imgScrollSpeed + 'px, 0, 0)';
			title_front.style.transform   = 'translate3d(' + -imgScrollSpeed + 'px, 0, 0)';
		}
	}

	function updateProgressBar( inWdPadding=0, inHtPaddingCoef=1 ) 
	{
		maxScrollY = Math.max(
			body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight
		) - innerHeight*inHtPaddingCoef;
		
		readBar.style.width = `${Math.max(0, Math.min(1,(scrollY-inWdPadding) / maxScrollY)) * 100}%`;
	}
	function mobileOpt() 
	{
		if ( isMobile() )
		{
			let title_front = document.getElementById("title-front");
			let font_size = title_front !== null ? title_front.getAttribute('font-size-mobile') : null;
			if( font_size !== null && screen.width < innerWidth >= dispWd[0] )
				title_front.setAttribute( 'style', 'font-size: ' + font_size );
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
	function easeInOutQuad(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}
	function easeOutQuint(t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}
	
	function easeOutExpo( t, b, c, d ) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}
}());