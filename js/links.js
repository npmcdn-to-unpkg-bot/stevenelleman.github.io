var link_height = $("link_type").height();
$('link_type').css('width', link_height+'px');

$(function() {
	var type = $('link_type');
	var height = type.height();
	type.css('width', height);
});

$(document).ready(function(){
	$.each(photo_links, function(index, element){

		/* Process fields */
		var link_address = $(element)[0];
		var link_name = $(element)[1];
		var link_date = $(element)[2];
		var link_type = $(element)[3];
		var final_address = "http://stevenelleman.github.io/images/image_links/photo/"+link_address+".jpg";
		var final_type = link_type + "_photo";

		/* Make Link Elements */
		var container = $("<div/>").addClass("link_img");
		var name = $("<div/>").addClass("link_name").text(link_name);
		var date = $("<div/>").addClass("date_loc").text(link_date);
		var type = $("<div/>").addClass("link_type").attr("title", link_type + " photos");
		var img = $("<img/>").attr("src", final_address);
		var type_img = $("<img/>").addClass("type_img").attr("src", "http://stevenelleman.github.io/images/icons/type_icons/photo_"+link_type+"_white.png");



		/* Combine Elements */
		type.append(type_img);
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
	} else if ($(window).width()  < 1000) {
		$('.link_img').css("width", "49.4%");
	} else if ($(window).width() < 1400) {
		$('.link_img').css("width", "32.4%");
	} else if ($(window).width() < 1800) {
		$('.link_img').css("width", "24.4%");
	} else {
		$('.link_img').css("width", "19.5%");
	}
});

$(document).ready(function() {
	if ($(window).width()  < 600) {
		$('.link_img').css("width", "99.5%");
	} else if ($(window).width()  < 1000) {
		$('.link_img').css("width", "49.4%");
	} else if ($(window).width() < 1400) {
		$('.link_img').css("width", "32.4%");
	} else if ($(window).width() < 1800) {
		$('.link_img').css("width", "24.4%");
	} else {
		$('.link_img').css("width", "19.5%");
	}
});

/* arrow */

var window_width = $(window).width();
/*
$(document).ready(function(){
	$( '#leftArrow' ).click(function(){
		$( 'showcase' ).animate({
			left: '+=' + window_width +'px'
		},500);
		return false;
	});
});

$(document).ready(function({
	$("#leftArrow").click(function(){
	  $("#current").animate({scrollRight : "+=1000px"});
	});
});*/
$(document).ready(function() {
	$("#downArrow").on("click", function() {
		$("links").css('display', 'block');
	});
});


function openLinks() {
	document.getElementById('link_box').style.display = 'block';
	document.getElementById('upArrow').style.display = 'block';
	document.getElementById('downArrow').style.display = 'none';
	
}

function closeLinks() {
	document.getElementById('link_box').style.display = 'none';
	document.getElementById('downArrow').style.display = 'block';
	document.getElementById('upArrow').style.display = 'none';
}

function leftSlide() {
	var left = document.getElementById('allShowcases').style.left;
	document.getElementById('allShowcases').style.left = left + "-100%";
	if (left < -450) {
		document.getElementById('leftArrow').style.display = "none";
	}
}

$(document).ready(function(){
	var left = parseInt(document.getElementById('allShowcases').style.left);
	if (left < -450) {
		document.getElementById('leftArrow').style.display = "none";
	} else if (-50 < left < 50) {
		document.getElementById('rightArrow').style.display = "none";
	} else {
		document.getElementById('leftArrow').style.display = "block";
		document.getElementById('rightArrow').style.display = "block";
	}
});

function showcaseClick() {
	var left = parseInt(document.getElementById('allShowcases').style.left);
	if (left < -450) {
		document.getElementById('leftArrow').style.display = "none";
	} else if (-50 < left < 50) {
		document.getElementById('rightArrow').style.display = "none";
	} else {
		document.getElementById('leftArrow').style.display = "block";
		document.getElementById('rightArrow').style.display = "block";
	}	
}

/*
$(document).ready(function(){
	$('#rightArrow').click(function(){
		var left = getCssProperty("all_showcases", "left");
		if (left === "0" || left === "0%") {
			$("all_showcases").css("left", "-100%");
		} else if (left === "-100%") {
			$("all_showcases").css("left", "-200%");
		} else if (left === "-200%") {
			$("all_showcases").css("left", "-300%");
		} else if (left === "-300%") {
			$("all_showcases").css("left", "-400%");
		} else if (left === "-400%") {
			$("all_showcases").css("left", "-500%");
		}
	});
});
*/
/*
$("#leftArrow").click(function(){
  $("all_showcases").css("left", "+=100%");
});
*/



$(document).ready(function(){
	$( '#leftArrow' ).click(function() {
		if ($('#allShowcases').css('left') == '-500%') {
			$( '#allShowcases' ).css('left', '0');
		} else {
	  		$( '#allShowcases' ).css('left', '-=100.000000000000000%');
	  	}
	});
});

$(document).ready(function(){
	$( '#rightArrow' ).click(function() {

	  $( '#allShowcases' ).css('left', '+=100.00000000000000%');
	});
});


