$(document).ready(function(){
	$.each(photo_links, function(index, element){

		/* Process fields */
		var link_address = $(element)[0];
		var link_name = $(element)[1];
		var link_date = $(element)[2];
		var link_type = $(element)[3];
		var final_address = "http://stevenelleman.github.io/images/image_links/photo/"+link_address+".jpg";
		var final_type = "." + link_type + "_photo";

		/* Make Link Elements */
		var container = $("<div/>").addClass("link_img");
		var name = $("<div/>").addClass("link_name").text(link_name);
		var date = $("<div/>").addClass("date_loc").text(link_date);
		var type = $("<div/>").addClass(final_type).attr("title", link_type);
		var img = $("<img/>").attr("src", final_address);

		/* Combine Elements */
		container.append(img);
		container.append(name);
		container.append(date);
		container.append(type);
		$(".links").append(container);
	});
});

$(window).on('resize', function() {
	if ($(window).width()  < 600) {
		$('.link_img').css("width", "99.5%");
	} else if ($(window).width()  < 900) {
		$('.link_img').css("width", "49.4%");
	} else if ($(window).width() < 1200) {
		$('.link_img').css("width", "32.4%");
	} else if ($(window).width() < 1600) {
		$('.link_img').css("width", "24.4%");
	} else {
		$('.link_img').css("width", "19.5%");
	}
});

$(document).ready(function() {
	if ($(window).width()  < 600) {
		$('.link_img').css("width", "99.5%");
	} else if ($(window).width()  < 900) {
		$('.link_img').css("width", "49.4%");
	} else if ($(window).width() < 1200) {
		$('.link_img').css("width", "32.4%");
	} else if ($(window).width() < 1600) {
		$('.link_img').css("width", "24.4%");
	} else {
		$('.link_img').css("width", "19.5%");
	}
});