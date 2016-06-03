
/* Click links */

/* photo galleries */
$(document).ready(function(){
	$(".photo_container").click(function(){
		populateBlogpage($(this));
	});
	$(".blog_container").click(function(){
		populateBlogpage($(this));
	});
	$(".drawing_container").click(function(){
		populateDrawingpage($(this));
	});
	$(".sculpture_container").click(function(){
		populateSculpturepage($(this));
	});
	$(".about_container").click(function(){
		populateBlogpage($(this));
	});
	$(".project_container").click(function(){
		populateBlogpage($(this));
	});
});

/*get rid of gallery*/
$(document).ready(function(){
	$(".exit").click(function(){
		var content_page = $(".content_page");
		var contents = $(".contents");
		content_page.attr("display", "none");
		contents.children().remove();
	});
});

function populatePhotopage(id) {
	var id = id.attr("id");
	var contents = $(".contents");
	var banner = $("<div/>").addClass(".gallery_banner");
	var banner_img_address = "image/img_banners/" + id + ".jpg";
	var banner_image = $("<img/>").attr("src", banner_image_address);
	var banner_title = $("<div/>").addClass(".gallery_title").text();
	banner.append(banner_image);
	banner.append(banner_title);
	contents.append(banner);

	/*must change class to appropriate mosaic class */
	var mosaic = $("<div/>").addClass(".mosaic_gallery");
	/* images */

	/*display */
	var content_page = $(".content_page");
	content_page.attr("display", "block");
	}

function populateBlogpage(id) {
	var id = id.attr("id");
	var content_container = $(".contents");
	var banner = $("<div/>").addClass(".contents_banner");
	var title = $("<div/>").addClass(".contents_title");
	var date = $("<div/>").addClass(".contents_date");
	var text = ("<div/>").addClass(".contents_text");
	/*figure out method to get blog text from id*/
	var text_content;
	text.append(text_content)
	content_container.append(banner);
	content_container.append(title);
	content_container.append(date);
	content_container.append(text);
	/*display */
	var content_page = $(".content_page");
	content_page.append(content_container);
	content_page.attr("display", "block");
}

function populateDrawingpage(id) {
	var id = id.attr("id");
	var content_container = $(".contents");
	var banner = $("<div/>").addClass(".contents_banner");
	var title = $("<div/>").addClass(".contents_title");
	var date = $("<div/>").addClass(".contents_date");
	/*figure out method to get images from id, dictionary with images, use for loop */

	/*display */
	var content_page = $(".content_page");
	content_page.append(content_container);
	content_page.attr("display", "block");
}

function populateSculpturepage(id) {
	var id = id.attr("id");
	var content_container = $(".contents");
	var banner = $("<div/>").addClass(".contents_banner");
	var title = $("<div/>").addClass(".contents_title");
	var date = $("<div/>").addClass(".contents_date");
	/*figure out method to get images from id, dictionary with images, use for loop */

	/*display */
	var content_page = $(".content_page");
	content_page.append(content_container);
	content_page.attr("display", "block");
}








