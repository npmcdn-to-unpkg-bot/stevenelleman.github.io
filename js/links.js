/* Resize showcase container, footer, and controls position of galleries link */
$(document).ready(function(){
	$(window).on("resize", function(){
		$(".showcase_container").height($(window).height() * 0.87);
		$(".footer_container").height($(window).height() * 0.13);
		$(".showcase_arrow_down").css("bottom", $(window).height() * 0.13)
	});
});

$(document).ready(function(){
		$(".showcase_container").height($(window).height() * 0.87);
		$(".footer_container").height($(window).height() * 0.13);
		$(".showcase_arrow_down").css("bottom", $(window).height() * 0.13)
});

$(document)



/* Open and Close links */

function openLinks() {
	document.getElementById('link_box').style.display = 'block';
	document.getElementById('upArrow').style.display = 'block';
	document.getElementById('downArrow').style.display = 'none';
}

function closeLinks() {
	document.getElementById('link_box').style.display = 'none';
	document.getElementById('downArrow').style.display = 'block';
	document.getElementById('upArrow').style.display = 'none';
	document.getElementById('grid_drawing').style.display = 'none';
	document.getElementById('grid_sculpture').style.display = 'none';
}

/* Mason Links */


/* Start off with photo links */
$(document).ready(function(){
	$.each(photo_links, function(index, element){
		loadPhotography(index,element);
	});
});

function loadBlog(index, element){
	var link_address = $(element)[0];
	var link_name = $(element)[1];
	var link_date = $(element)[2];
	var link_content = $(element)[3];
	var container = $("<div/>").addClass("blog_container blog_collapsed").attr("onclick", "openBlog(this)");
	var header = $("<div/>").addClass("blog_header");
	var title = $("<div/>").addClass("blog_title");
	var date = $("<div/>").addClass("blog_date");
	var content = $("<div/>").addClass("blog_content");
	var footer = $("<div/>").addClass("blog_footer blog_collapsed");
	title.text(link_name);
	date.text(link_date);
	header.append(title);
	header.append(date);
	container.append(header);
	content.append(link_content);
	container.append(content)
	container.append(footer);
	$(".links").append(container);
}

/*
<div class="showcase_arrow_down" id="downArrow" onclick="openLinks();" style="display: block;">
		<div class="gallery_title"> Galleries </div>
		<img src="images/icons/arrows/arrow.png">
	</div>
	*/

/*function openBlog(curr) {
	if (curr.hasClass("blog_collapsed blog_container")){
		console.log("fuck this shit")
		curr.find(".blog_footer").removeClass("blog_collapsed");
		curr.removeClass("blog_collapsed");
	} else if (curr.hasClass("blog_container")) {
		console.log("this too")
		curr.find(".blog_footer").addClass("blog_collapsed");
		curr.removeClass("blog_collapsed");
	}
}

$(".blog_container").click(function(){
	curr = $(this).click();
	if (curr.hasClass("blog_collapsed blog_container")){
		console.log("fuck this shit")
		curr.find(".blog_footer").removeClass("blog_collapsed");
		curr.removeClass("blog_collapsed");
	} else if (curr.hasClass("blog_container")) {
		console.log("this too")
		curr.find(".blog_footer").addClass("blog_collapsed");
		curr.removeClass("blog_collapsed");
	}
})*/

function openBlog(e) {
	if ($(e).hasClass("blog_collapsed") && $(e).hasClass("blog_container")) {
		console.log("2")
		$(e).find(".blog_footer").removeClass("blog_collapsed");
		$(e).removeClass("blog_collapsed");
		$(e).attr("onclick", "closeBlog(this)");
		$(e).find(".blog_footer").attr("onclick", "closeFooter(this)");
	}
}

function closeBlog(e) {
	console.log(e)
	$(e).closest(".blog_footer").addClass("blog_collapsed");
	$(e).closest(".blog_container").addClass("blog_collapsed");
	$(e).closest(".blog_container").attr("onclick", "openBlog(this)");
}

function closeFooter(e) {
	$(e).addClass("blog_collapsed");
}




/* For links, also for gallery change */
var current_section = '#Photography_link';
/* Automatically load links */
$(document).ready(function(){
	/* Link changes showcase image*/
	$('#Photography_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current');});
		$( '#allShowcases' ).css('left', '0%');
		$('#Photography_link').addClass('current');
		current_section = '#Photography_link';
		$(".links").empty();
		$("#downArrow").css("display", "block");
		closeLinks();
	});
	$('#Drawing_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-500%');
		$('#Drawing_link').addClass('current');
		current_section = '#Drawing_link';
		$(".links").empty();
		$("#downArrow").css("display", "block");
		closeLinks();
	});
	$('#Sculpture_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-600%');
		$('#Sculpture_link').addClass('current');
		current_section = '#Sculpture_link';
		$(".links").empty();
		$("#downArrow").css("display", "block");
		closeLinks();
	});
	$('#Blog_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-700%');
		$('#Blog_link').addClass('current');
		current_section = '#Blog_link';
		$(".links").empty();
		$("#downArrow").css("display", "block");
		closeLinks();
	});
	$('#Projects_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-800%');
		$('#Projects_link').addClass('current');
		current_section = '#Projects_link';
		$(".links").empty();
		$("#downArrow").css("display", "block");
		closeLinks();
	});
	$('#About_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-900%');
		$('#About_link').addClass('current');
		current_section = '#About_link';
		$(".links").empty();
		$("#downArrow").css("display", "block");
		closeLinks();
	});
	$('#Contact_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-1000%');
		$('#Contact_link').addClass('current');
		current_section = '#Contact_link';
		$(".links").empty();
		console.log("got")
		$("#downArrow").css("display", "none !important");
		closeLinks();
	});

	if (current_section == '#Contact_link') {
		$("#downArrow").hide();
	}

	/* load links */
	$(".title_container").click(function(){
		console.log('got to load links')
		var photo = $('#Photography_link');
		var drawing = $('#Drawing_link');
		var sculpture = $('#Sculpture_link');
		var blog = $('#Blog_link');
		var project = $('#Projects_link');
		var about = $('#About_link');
		var contact = $('#Contact_link');
		if (photo.hasClass("current")) {
			$(".links").empty();
			$.each(photo_links, function(index, element){
				loadPhotography(index,element);
			});
		} else if (drawing.hasClass("current")) {
			$(".links").empty();
			
			$("#drawing_grid").css("display", "block");
		} else if (sculpture.hasClass("current")) {
			$(".links").empty();
			/*
			$.each(sculpture_links, function(index, element){
				loadMason(index,element);
			});*/
			$("#sculpture_grid").css("display", "block");
		} else if (blog.hasClass("current")) {
			$(".links").empty();
			$.each(blog_links, function(index, element){
				loadBlog(index,element);
			});
		} else if (project.hasClass("current")) {
			$(".links").empty();
			$.each(project_links, function(index, element){
				loadBlog(index,element);
			});
		} else if (about.hasClass("current")) {
			$(".links").empty();
			console.log("load about before")
			$.each(about_links, function(index, element) {
				console.log("load about");
				loadAbout(index,element);
			});
		} else if (contact.hasClass("current")) {
			$(".links").empty();
			$("#downArrow").css("display", "none");
		}
	});
});
