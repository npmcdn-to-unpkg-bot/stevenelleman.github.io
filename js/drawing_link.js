
/* Drawing and Sculpture */
/* ["photo_address", "title", "date", "type", "classes"] */



function loadMason(index, element){
	var link_address = $(element)[0];
	var link_name = $(element)[1];
	var link_date = $(element)[2];
	var final_address = "images/image_links/drawing/"+link_address+".jpg";
	var grid_item = $("<div/>").addClass("grid-item");
	var grid_img = $("<img/>").attr("src", final_address);
	grid_item.append(grid_img);
	return grid_item;
}

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
