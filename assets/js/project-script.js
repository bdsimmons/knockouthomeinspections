$(document).ready(function()
{
	header_handler();
	init_skills_owl();
	init_selectpicker();
	init_smooth_scroll();
	console.log('ready');
});

$(window).bind('change', 'resize', 'load', function()
{
	header_handler();
});

function init_selectpicker()
{
	var selectpicker = $('.select-picker');

	if ($(selectpicker).length > 0)
	{
		$(selectpicker).selectpicker();
	}
}

function header_handler()
{
	var dropdown;
	var viewport_width = $(window).width();
	var viewport_height = $(window).height();
	var $header = $('#vh_viewport');
	var $dropdown_trigger =$('#cnt_main_nav ul.main-nav >li >a');

	if ((viewport_height > 650) && (viewport_width > 991))
	{
		$header.height((viewport_height) + 'px');
	}

	if (viewport_width < 767)
	{
		$dropdown_trigger.bind('click', function()
		{
			dropdown = $(this).closest('li').find('.sub-nav-container');
			dropdown.slideToggle('fast');
		});
	}
}

function init_smooth_scroll()
{
	var cnt;
	var smooth = $('.smooth');
	var nav_height

	if (smooth.length > 0)
	{
		$(smooth).bind('click', function() 
		{
			nav_height = $('#sticky_nav').height() + 10;
			console.log($(this));
			/*$(smooth).removeClass('active');
			$(this).addClass('active');*/

			cnt = $(this).attr('href');

			$('html, body').animate(
			{
				scrollTop: $(cnt).offset().top
			}, 1000);

			return false;
		});
	};
}

function init_skills_owl()
{
	var $skill_owl = $('#skills_carousel');

	$skill_owl.owlCarousel(
	{
		dots : false,
		dotsEach : false,
		items : 4,
		nav : true,
		smartSpeed : 1000,
		navText : ['<span><i class="fa fa-chevron-left"></i></span>', '<span><i class="fa fa-chevron-right"></i></span>'],

		responsive :
		{
			0 :
			{
				items : 1
			},

			380 :
			{
				items : 1
			},

			381 :
			{
				items : 2
			},

			650 :
			{
				items : 2
			},

			651 :
			{
				items : 3
			},

			991 :
			{
				items : 3
			},

			992 :
			{
				items : 4
			}
		}
	});
}