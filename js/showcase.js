/* arrow */

var window_width = $(window).width();

/*
$(document).ready(function() {
	$("#downArrow").on("click", function() {
		$("links").css('display', 'block');
	});
});*/


$(document).ready(function(){
	if (isNaN(parseInt($('#allShowcases')[0].style.left)/100)) {
		$( '#allShowcases' ).css('left', '0%');
	}

	$( '#leftArrow' ).click(function() {
		var left = parseInt($('#allShowcases')[0].style.left)/100;
		console.log(left);
		if (isNaN(left)) {
			$( '#allShowcases' ).css('left', '-1000%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Contact_link').addClass('current');
			current_section = '#Contact_link';
		} else if (-0.5 < left && left < 0.5) {
			$( '#allShowcases' ).css('left', '-1000%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Contact_link').addClass('current');
			current_section = '#Contact_link';
		} else if ( -1.5 < left && left < -0.5) {
			$( '#allShowcases' ).css('left', '0%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Photography_link').addClass('current');
			current_section = '#Photography_link';
		} else if ( -2.5 < left && left < -1.5) {
			$( '#allShowcases' ).css('left', '-100%');
		} else if ( -3.5 < left && left < -2.5) {
			$( '#allShowcases' ).css('left', '-200%');
		} else if ( -4.5 < left && left < -3.5) {
			$( '#allShowcases' ).css('left', '-300%');
		} else if ( -5.5 < left && left < -4.5) {
			$( '#allShowcases' ).css('left', '-400%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Photography_link').addClass('current');
			current_section = '#Photography_link';
		} else if ( -6.5 < left && left < -5.5) {
			$( '#allShowcases' ).css('left', '-500%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Drawing_link').addClass('current');
			current_section = '#Drawing_link';
		} else if ( -7.5 < left && left < -6.5) {
			$( '#allShowcases' ).css('left', '-600%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Sculpture_link').addClass('current');
			current_section = '#Sculpture_link';
		} else if ( -8.5 < left && left < -7.5) {
			$( '#allShowcases' ).css('left', '-700%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Blog_link').addClass('current');
			current_section = '#Blog_link';
		} else if ( -9.5 < left && left < -8.5) {
			$( '#allShowcases' ).css('left', '-800%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Projects_link').addClass('current');
			current_section = '#Projects_link';
		} else if ( -10.5 < left && left < -9.5) {
			$( '#allShowcases' ).css('left', '-900%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#About_link').addClass('current');
			current_section = '#About_link';
		} /*else if ( -11.5 < left && left < -10.5) {
			$( '#allShowcases' ).css('left', '-1000%');
		}*/
	});

	$( '#rightArrow' ).click(function() {
		var left = parseInt($('#allShowcases')[0].style.left)/100;
		console.log(left);
		if (isNaN(left)) {
			$( '#allShowcases' ).css('left', '0%');
		}
		if (isNaN(left)) {
			$( '#allShowcases' ).css('left', '-100%');
		} else if (-0.5 < left && left < 0.5) {
			$( '#allShowcases' ).css('left', '-100%');
		} else if ( -1.5 < left && left < -0.5) {
			$( '#allShowcases' ).css('left', '-200%');
		} else if ( -2.5 < left && left < -1.5) {
			$( '#allShowcases' ).css('left', '-300%');
		} else if ( -3.5 < left && left < -2.5) {
			$( '#allShowcases' ).css('left', '-400%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Photography_link').addClass('current');
			current_section = '#Photography_link';
		} else if ( -4.5 < left && left < -3.5) {
			$( '#allShowcases' ).css('left', '-500%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Drawing_link').addClass('current');
			current_section = '#Drawing_link';
		} else if ( -5.5 < left && left < -4.5) {
			$( '#allShowcases' ).css('left', '-600%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Sculpture_link').addClass('current');
			current_section = '#Sculpture_link';
		} else if (-6.5 < left && left < -5.5) {
			
			$( '#allShowcases' ).css('left', '-700%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Blog_link').addClass('current');
			current_section = '#Blog_link';

		} else if ( -7.5 < left && left < -6.5) {
			$( '#allShowcases' ).css('left', '-800%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Projects_link').addClass('current');
			current_section = '#Projects_link';
		} else if ( -8.5 < left && left < -7.5) {
			$( '#allShowcases' ).css('left', '-900%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#About_link').addClass('current');
			current_section = '#About_link';
		} else if ( -9.5 < left && left < -8.5) {
			$( '#allShowcases' ).css('left', '-1000%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Contact_link').addClass('current');
			current_section = '#Contact_link';
		} else if ( -10.5 < left && left < -9.5) {
			$( '#allShowcases' ).css('left', '-0%');
			$('.section_links').children().each(function(){$(this).removeClass('current')});
			$('#Photography_link').addClass('current');
			current_section = '#Photography_link';
		} /*else if ( -11.5 < left && left < -10.5) {
			$( '#allShowcases' ).css('left', '0%');
		}*/
	});
});

