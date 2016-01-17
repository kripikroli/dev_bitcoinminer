var didScroll,
	scrollTop,
	navbar = $('header'),
	navbarHeight = $('header').outerHeight();

$(document).ready(function(){
	$(window).scroll();
});

$(window).scroll(function(){
	didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
	scrollTop = $(window).scrollTop();

	if(scrollTop > navbarHeight / 2){
		navbar.addClass('scrolled');
	}else{
		navbar.removeClass('scrolled');
	}
}