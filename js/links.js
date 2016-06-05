

/* ["photo_address", "title", "date", "description", "classes"] */
var drawing_links = [
	["drawing_1", "Branches and Fractals", "10-1-2015", "pen"],
	["drawing_2", "Kayla", "", "pencil"],
	["drawing_3", "", "10-04-2014", "pen"],
	["drawing_4","Redemption", "Summer 2013", "pen"],
	["drawing_5", "", "30-04-2013", "pen"],
	["drawing_6", "", "13-03-2013", "pen"],
	["drawing_7", "", "Spring 2013", "pen"],
	["drawing_8", "", "", "pen"],
	["drawing_9", "", "30-04-2013", "pen'"],
	["drawing_10", "", "30-04-2013", "pen"],
	["drawing_11", "", "", "pencil"],
	["drawing_12", "Transformation", "", "pencil"],
	["drawing_13", "Trapped", "", "pencil"],
	["drawing_14", "Prometheus", "", "pencil"],
	["drawing_15", "", "", "pencil"],
	["drawing_16", "", "", "pencil"],
	["drawing_17", "Shattered", "", "pencil"],
	["drawing_18", "", "", "pencil"],
	["drawing_19", "", "", "pencil"],
	["drawing_20", "Mouthpieces", "", "pencil"],
	["drawing_21", "", "", "pencil"],
	["drawing_22", "Pasternoster Square", "", "print"],
	["drawing_23", "", "", "print"],
	["drawing_24", "", "", "print"],
	["drawing_25", "", "", "print"]
];
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

}

/* Start off with photo links */
$(document).ready(function(){
	$.each(photo_links, function(index, element){
		loadPhotography(index,element);
	});
});

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
		closeLinks();
	});
	$('#Drawing_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-500%');
		$('#Drawing_link').addClass('current');
		current_section = '#Drawing_link';
		$(".links").empty();
		closeLinks();
	});
	$('#Sculpture_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-600%');
		$('#Sculpture_link').addClass('current');
		current_section = '#Sculpture_link';
		$(".links").empty();
		closeLinks();
	});
	$('#Blog_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-700%');
		$('#Blog_link').addClass('current');
		current_section = '#Blog_link';
		$(".links").empty();
		closeLinks();
	});
	$('#Projects_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-800%');
		$('#Projects_link').addClass('current');
		current_section = '#Projects_link';
		$(".links").empty();
		closeLinks();
	});
	$('#About_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-900%');
		$('#About_link').addClass('current');
		current_section = '#About_link';
		$(".links").empty();
		closeLinks();
	});
	$('#Contact_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-1000%');
		$('#Contact_link').addClass('current');
		current_section = '#Contact_link';
		$(".links").empty();
		closeLinks();
	});

	/* load links */
	$(".title_container").click(function(){
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
			/*var grid = $('.grid').imagesLoaded(function() {
				  grid.masonry({
				    itemSelector: '.grid-item',
				    percentPosition: true,
				    columnWidth: '.grid-sizer'
				  }); 
				});*/
			/*var grid2 = $("<div/>").addClass("grid");*/
			/*var size = $("<div/>").addClass("grid-sizer");
			grid.append(size);*/
			/*grid2.append(size);*/
			/*$.each(drawing_links, function(index, element){
				console.log("Drawing loop")
				var box = loadMason(index,element);
				grid.append(box);
				/*grid2.append(box);*/
			
			/*$.get("html/drawing.html", function(data){
    			$(".links").children("div:first").html(data);
			});*/

			/*$.get('html/drawing.html').success(function(data) {
     			$('.links').html(data);
 			});*/
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
			loadContact();
		}
	});
});
