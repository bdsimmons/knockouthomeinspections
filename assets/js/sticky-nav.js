var elem = $('#sticky_nav');
var nav_pos;

$(document).ready(function() 
{	
	elem.removeClass('nav-sticked');
	nav_pos = $('#sticky_nav').offset().top - parseFloat($('#sticky_nav').css('marginTop').replace(/auto/, 0));
});

$(document).ready(function() 
{
	$('#sticky_nav a').bind('click', function()
	{
		var href = $.attr(this, 'href');
		
		if(href.substr(0 , 1) == "#" && href.length > 1 && $(href).length > 0)
		{
			$('html, body').animate(
			{
		        scrollTop: $($.attr(this, 'href')).offset().top - 45
		    }, 500);
	    	return false;
		}
	});
});

$(window).bind('scroll resize', function()
{
	var window_pos = $(window).scrollTop();

	if (window_pos >= nav_pos && !$('#sticky_nav').hasClass('nav-sticked')) 
	{
		elem.addClass('nav-sticked');
		$('body').css('paddingTop', elem.height() + 'px');
	}
	
	else if ( window_pos <= nav_pos ) {
		elem.removeClass('nav-sticked');
		$('body').css('paddingTop', '0');
	}
});

$(window).bind('scroll resize', function() {

	var currentSection = null;

	$('.float-section').each(function()
	{
		var element = $(this).attr('id');
		if($(window).scrollTop() >= $('#'+element).offset().top - 45)
		{
			currentSection = element;
		}
	});

	if (currentSection)
	{
		$('#sticky_nav ul li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
	}
});