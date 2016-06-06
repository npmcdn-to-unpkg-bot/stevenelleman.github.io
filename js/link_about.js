/* About */
/* ["photo_address", "title", "contents"] */
function loadAbout(index, element) {
	var link_address = $(element)[0];
	var link_name = $(element)[1];
	var link_contents = $(element)[2];
	var final_address = "http://www.stevenelleman.com/pw2-images/images/image_links/about/"+link_address+".jpg";
	
	/* Make Elements */
	var container = $("<div/>").addClass("about_banner");
	container.css("background-image", "url("+final_address+")");
	container.attr("id", link_address);
	var id = $("#"+link_address);
	var name = $("<div/>").addClass("about_name").text(link_name);
	var arrow_down = $("<div/>").addClass("about_arrow").attr("id", "#about_arrow");
	var arrow_down_img = $("<img/>").attr("src", "http://www.stevenelleman.com/pw2-images/images/icons/arrows/arrow.png");
	var contents = $("<div/>").text(link_contents).addClass("about_contents");
	container.append(name);
	arrow_down.append(arrow_down_img);
	container.append(arrow_down);
	container.append(contents);
	$(".links").append(container);
}

$(document).ready(function(){
	$(".about_banner").click(function(){
		var curr = $(this);
		var curr_contents = curr.children(".about_contents");
		curr_contents.css("display", "block");
	})
})

/* ["photo_address", "title", sub-categories] */
var about_links = [
	/*d*/
	["about_me", "About Me", "Yo"], /*get full version*/
	/*d*/
	["about_resume", "Resume", "yo"], /*change photo */
	/*d*/
	["about_interests", "Interests"], /*50% 40%*/
	/*d*/
	["about_travels", "Travels"], /*50% 80% */
	/*d*/
	["about_books", "Reading List"] /* 50% 60% */
];