$(window).on('resize', function() {
	if ($(window).width()  < 600) {
		$('.link_img').css("width", "99.5%");
	} else if ($(window).width()  < 1200) {
		$('.link_img').css("width", "49.5%");
		$('#commission').css("display", "block");
	} else if ($(window).width() < 1800) {
		$('.link_img').css("width", "32.7%");
		$('#commission').css("display", "none");
	} else {
		$('.link_img').css("width", "24.8%");
		$('#commission').css("display", "block");
		
	}
});

$(document).ready(function() {
	if ($(window).width()  < 600) {
		$('.link_img').css("width", "99.5%");
	} else if ($(window).width()  < 1200) {
		$('.link_img').css("width", "49.5%");
	} else if ($(window).width() < 1800) {
		$('.link_img').css("width", "32.7%");
		$('#commission').css("display", "none");
	} else {
		$('.link_img').css("width", "24.8%");
	}
});