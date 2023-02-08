!function(){"use strict";const n=document.body,a=document.documentElement,e=document.getElementById("page"),t=document.getElementById("blog"),o=document.getElementById("read-progress"),i=document.getElementById("title-front"),d=document.getElementById("title-back"),s=document.getElementById("blog_main_art"),l=[768,1080,1280];let r,c,f,m,u,g,h;$(function(){var e,t;M(),y(),w(),b(),C(),E(),I(),W(),x(),S(),B(),v()&&(e=document.getElementById("title-front"),null!==(t=null!==e?e.getAttribute("font-size-mobile"):null))&&screen.width<innerWidth>=l[0]&&e.setAttribute("style","font-size: "+t)});var p={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return p.Android()||p.BlackBerry()||p.iOS()||p.Opera()||p.Windows()}},v=()=>null!==(p.Android()||p.iOS()),y=()=>{$(document).on("click",function(e){var t=$("#offcanvas, .js-nav-toggle");t.is(e.target)||0!==t.has(e.target).length||$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-nav-toggle").removeClass("active"),n.style.overflow="")})},w=()=>{$("#page").prepend('<div id="offcanvas" />'),$("#page").prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');var e=$(".menu-1 > ul").clone();$("#offcanvas").append(e),$("#offcanvas .has-dropdown").addClass("offcanvas-has-dropdown"),$("#offcanvas").find("li").removeClass("has-dropdown"),$(".offcanvas-has-dropdown").mouseenter(function(){$(this).addClass("active").find("ul").slideDown(500,"easeOutExpo")}).mouseleave(function(){$(this).removeClass("active").find("ul").slideUp(500,"easeOutExpo")}),$(window).resize(function(){$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-nav-toggle").removeClass("active"))})},b=()=>{$("body").on("click",".js-nav-toggle",function(e){var t=$(this);$("body").hasClass("overflow offcanvas")?($("body").removeClass("overflow offcanvas"),n.style.overflow=""):($("body").addClass("overflow offcanvas"),n.style.overflow="hidden"),t.toggleClass("active"),e.preventDefault()})},C=()=>{$(".animate-box").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated-fast")||($(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(e){var t=$(this);setTimeout(function(){var e=t.data("animate-effect");"fadeIn"===e?t.addClass("fadeIn animated-fast"):"fadeInLeft"===e?t.addClass("fadeInLeft animated-fast"):"fadeInRight"===e?t.addClass("fadeInRight animated-fast"):t.addClass("fadeInUp animated-fast"),t.removeClass("item-animate")},200*e,"easeInOutExpo")})},100))},{offset:"85%"})},I=()=>{v()||$(".has-dropdown").mouseenter(function(){$(this).find(".dropdown").css("display","block").addClass("animated-fast fadeInUpMenu")}).mouseleave(function(){$(this).find(".dropdown").css("display","none").removeClass("animated-fast fadeInUpMenu")})},W=()=>{$(".js-gotop").on("click",function(e){return e.preventDefault(),$("html, body").animate({scrollTop:$("html").offset().top},250,"easeInOutExpo"),!1});const e=v()?800:2e3;$(window).scroll(function(){scrollY>e?$(".js-top").addClass("active"):$(".js-top").removeClass("active")})},x=()=>{$(window).on("DOMContentLoaded",()=>{$(".loader").fadeOut("slow")}),$(window).on("load",()=>{$("#blog_main_art").fadeIn("slow")})},k=()=>{$(".js-counter").countTo({formatter:function(e,t){return e.toFixed(t.decimals)}})},S=()=>{0<$("#counter").length&&$("#counter").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(k,400),$(this.element).addClass("animated"))},{offset:"90%"})},E=()=>{$(".flexslider").flexslider({animation:"fade",slideshowSpeed:5e3,directionNav:!0,start:function(){setTimeout(function(){$(".slider-text, .blog-title-style").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text, .blog-title-style").addClass("animated fadeInUp")},500)},before:function(){setTimeout(function(){$(".slider-text, .blog-title-style").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text, .blog-title-style").addClass("animated fadeInUp")},500)}})},M=()=>{let e=localStorage.getItem("darkMode"),t=document.getElementById("title-back");const n=null!==t?t.getAttribute("light_col"):"white",a=null!==t?t.getAttribute("dark_col"):"black",o=()=>{$("body").addClass("dark-mode"),localStorage.setItem("darkMode","enabled"),null!==t&&(t.style.color=null!==n?n:"white")},i=()=>{$("body").removeClass("dark-mode"),localStorage.setItem("darkMode","disabled"),null!==t&&(t.style.color=null!==a?a:"black")};("enabled"==e||"disabled"!=e&&window.matchMedia("(prefers-color-scheme: dark)").matches?o:i)(),$("body").on("click",".theme-toggle",function(){("enabled"!==(e=localStorage.getItem("darkMode"))?o:i)()})},B=()=>{v()?null!==i&&(d.style.display="none",window.addEventListener("scroll",()=>{requestAnimationFrame(()=>{i.style.transform="translateY("+.15*scrollY+"px",A()})})):null!==s&&(t.style.opacity=0,t.style.scale=0,m=innerWidth>=l[2]?.2:innerWidth>=l[1]?.1:innerWidth>=l[0]?.13:.35,u=innerWidth>=l[2]?100:innerWidth>=l[0]?50:30,g=function(e){let t=e.parentNode,n=t.offsetHeight,a=t.offsetWidth,o=window.getComputedStyle(e).boxSizing,i=parseFloat(window.getComputedStyle(e).paddingTop),d=parseFloat(window.getComputedStyle(e).paddingBottom),s=parseFloat(window.getComputedStyle(e).paddingLeft),l=parseFloat(window.getComputedStyle(e).paddingRight);"border-box"===o&&(i+=parseFloat(window.getComputedStyle(e).borderTopWidth),d+=parseFloat(window.getComputedStyle(e).borderBottomWidth),s+=parseFloat(window.getComputedStyle(e).borderLeftWidth),l+=parseFloat(window.getComputedStyle(e).borderRightWidth));var e=(i+d)/n*100,r=(s+l)/a*100;return{top:i,bottom:d,left:s,right:l,percentH:e,percentW:r}}(i).top,h=20,window.addEventListener("resize",()=>{m=innerWidth>=l[2]?.2:innerWidth>=l[0]?.13:.35,u=innerWidth>=l[2]?100:innerWidth>=l[0]?50:30,A(innerWidth>=l[2]?innerWidth/2:innerWidth,2)}),window.addEventListener("scroll",()=>{requestAnimationFrame(()=>{c=innerWidth>=l[2]?2*scrollY:scrollY,f=Math.min(1,c/innerWidth),t.style.opacity=Math.min(1,function(e,t,n,a){return n*(e/=a)*e*e+t}(1.3*f,0,1,1)),t.style.scale=Math.min(1,O(f,0,1,1)),i.style.paddingTop=g-O(f,0,g-u,1)+"px",d.style.paddingTop=g-O(f,0,g-u,1)+"px",c<innerWidth+h&&(e.style.transform="translate3d(0,"+scrollY+"px, 0)",t.style.transform="translate3d(0,"+-Math.min(innerHeight*m,c)+"px, 0)",s.style.transform="translate3d("+c+"px, 0, 0)",i.style.transform="translate3d("+-c+"px, 0, 0)"),A(innerWidth>=l[2]?innerWidth/2:innerWidth,2)})}))};function A(e=0,t=1){r=Math.max(n.scrollHeight,n.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)-innerHeight*t,o.style.width=100*Math.max(0,Math.min(1,(scrollY-e)/r))+"%"}function O(e,t,n,a){return n*((e=e/a-1)*e*e+1)+t}}();