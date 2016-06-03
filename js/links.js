var link_height = $("link_type").height();
$('link_type').css('width', link_height+'px');

$(function() {
	var type = $('link_type');
	var height = type.height();
	type.css('width', height);
});




/* Drawing and Sculpture */
/* ["photo_address", "title", "date", "type", "classes"] */
function loadMason(index, element){
	var grid = $("<div/>").addClass("grid").masonry({columnwidth: 300})
	
}


/* Contact */
function loadContact() {

}

function closeLinks() {

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
		/*take in ID in the function */
		$('#Photography_link').addClass('current');
		current_section = '#Photography_link';
		closeLinks();
		/*changeGallery(current_section)*/
		/*can call a function hwere*/
	});
	$('#Drawing_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-500%');
		$('#Drawing_link').addClass('current');
		current_section = '#Drawing_link';
		closeLinks();
	});
	$('#Sculpture_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-600%');
		$('#Sculpture_link').addClass('current');
		current_section = '#Sculpture_link';
		closeLinks();
	});
	$('#Blog_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-700%');
		$('#Blog_link').addClass('current');
		current_section = '#Blog_link';
		closeLinks();
	});
	$('#Projects_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-800%');
		$('#Projects_link').addClass('current');
		current_section = '#Projects_link';
		closeLinks();
	});
	$('#About_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-900%');
		$('#About_link').addClass('current');
		current_section = '#About_link';
		closeLinks();
	});
	$('#Contact_link').click(function(){
		$('.section_links').children().each(function(){$(this).removeClass('current')});
		$( '#allShowcases' ).css('left', '-1000%');
		$('#Contact_link').addClass('current');
		current_section = '#Contact_link';
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
			var grid = $('.grid').imagesLoaded( function() {
				  grid.masonry({
				    itemSelector: '.grid-item',
				    percentPosition: true,
				    columnWidth: '.grid-sizer'
				  }); 
				});


			var size = $("<div/>").addClass("grid-sizer");
			grid.append(size);
			$.each(drawing_links, function(index, element){
				var box = loadMason(index,element);
				grid.append(box);
				console.log("in loop");
			});

			$(".links").append(grid);
		} else if (sculpture.hasClass("current")) {
			$(".links").empty();
			$.each(sculpture_links, function(index, element){
				loadMason(index,element);
			});
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