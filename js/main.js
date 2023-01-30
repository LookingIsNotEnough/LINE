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
	var isMobile = () => {
		return isDevice.Android() || isDevice.iOS();
	}

	var mobileMenuOutsideClick = function() 
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


	var offcanvasMenu = function() 
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


	var burgerMenu = function() 
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
	

	var contentWayPoint = function() 
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


	var dropdown = function() 
	{
		if (isMobile() !== null)
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


	var goToTop = function() 
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
	var loaderPage = function() 
	{
		$(window).on( 'DOMContentLoaded', function() {
			$(".loader").fadeOut("slow");
		});
	};

	var counter = function() 
	{
		$('.js-counter').countTo( {
			 formatter: function (value, options) 
			 {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
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

	var sliderMain = function() {
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

	var darkModeToggle = () => {
		let darkMode = localStorage.getItem("darkMode");
		const enableDarkMode = () =>
		{
			$('body').addClass('dark-mode');
			localStorage.setItem("darkMode", "enabled");
		}
		
		const disableDarkMode = () => 
		{
			$('body').removeClass('dark-mode');
			localStorage.setItem("darkMode", "disabled");
		}
		
		if ( darkMode == "enabled" || ( darkMode != "disabled" && window.matchMedia('(prefers-color-scheme: dark)').matches ) )
		   enableDarkMode();

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
		if ( isMobile() !== null ) return;
		
		let page          = document.getElementById("page");
		let hero          = document.getElementById("hero");
		let title         = document.getElementById("title");
		let blog_main_art = document.getElementById("blog_main_art");
		let blog          = document.getElementById("blog");

		if (blog_main_art === null)
			return;
			
		hero.style.maxHeight = 0;
		blog.style.opacity   = 0;
		blog.style.scale     = 0;

		var innerW     = window.innerWidth;
		var innerH     = window.innerHeight;
		var scroll_padding = 50;
		var blog_padding   = innerW > 768 ? 0.65 : 1;

		window.addEventListener('scroll', ()=> {
			var Y_val          = window.scrollY;
			var parallax_Val   = Y_val * 1;

			blog.style.opacity = Math.min( 1, easeInCubic( Y_val/ innerW, 0, 1, 1) );
			blog.style.scale   = Math.min( 1, easeOutCubic( Y_val/ innerW, 0, 1, 1) );
			// blog.style.left = -parallax_Val + 'px';

			if ( innerW + scroll_padding > Y_val )
			{
				page.style.top           = parallax_Val + 'px';
				blog_main_art.style.left = parallax_Val + 'px';
				title.style.left         = -parallax_Val*0.9 + 'px';
				title.style.top          = Y_val * 0.25 + 'px';
				blog.style.transform     = 'translateY(' + - Math.min( innerH * blog_padding, Y_val) + 'px)';
			}
		})
	}

	var mobileOpt = () => 
	{
		if (isMobile() !== null)
		{
			let title     = document.getElementById("title");
			let font_size = title !== null ? title.getAttribute('font-size-mobile') : null;
			
			if( font_size !== null && screen.width < 768 )
			{
				title.setAttribute( 'style', 'font-size: ' + font_size );
			}
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