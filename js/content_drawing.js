/* ["photo_address", "title", "date", "description", "classes"] */
/*var drawing_links = [
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
];*/

/* JSON drawing */

var drawing_information = [
	{"id": , "address": "drawing_1" ,"name":, "date": , "media": },
	{"id": ,"address": "drawing_2" ,"name":, "date": , "media": },
	{"id": ,"address": "drawing_3","name":, "date": , "media": },
	{"id": ,"address": "drawing_4","name":, "date": , "media": },
	{"id": ,"address": "drawing_5","name":, "date": , "media": },
	{"id": ,"address": "drawing_6","name":, "date": , "media": },
	{"id": ,"address": "drawing_7","name":, "date": , "media": },
	{"id": ,"address": "drawing_8","name":, "date": , "media": },
	{"id": ,"address": "drawing_9","name":, "date": , "media": },
	{"id": ,"address": "drawing_10","name":, "date": , "media": },
	{"id": ,"address": "drawing_11","name":, "date": , "media": },
	{"id": ,"address": "drawing_12","name":, "date": , "media": },
	{"id": ,"address": "drawing_13","name":, "date": , "media": },
	{"id": ,"address": "drawing_14","name":, "date": , "media": },
	{"id": ,"address": "drawing_15","name":, "date": , "media": },
	{"id": ,"address": "drawing_16","name":, "date": , "media": },
	{"id": ,"address": "drawing_17","name":, "date": , "media": },
	{"id": ,"address": "drawing_18","name":, "date": , "media": },
	{"id": ,"address": "drawing_19","name":, "date": , "media": },
	{"id": ,"address": "drawing_20","name":, "date": , "media": },
	{"id": ,"address": "drawing_21","name":, "date": , "media": },
	{"id": ,"address": "drawing_22","name":, "date": , "media": },
	{"id": ,"address": "drawing_23","name":, "date": , "media": },
	{"id": ,"address": "drawing_24","name":, "date": , "media": },
	{"id": ,"address": "drawing_25","name":, "date": , "media": },
	{"id": ,"address": "drawing_26","name":, "date": , "media": },
	{"id": ,"address": "drawing_27","name":, "date": , "media": },
	{"id": ,"address": "drawing_28","name":, "date": , "media": }
];

/* Load into Content Page */ 

function contentDrawing(e) {
	var id = e.attr("id");
	var index=0;
	for i in drawing_information {
		if (i.address === id) {
			break;
		}
		index += 1;
	}
	var item = drawing_information[index];
	var address = item.address;
	var name = item.name;
	var date = item.date;
	var media = item.media;
	$(".content_title_drawing").append(name);
	$(".content_date_drawing").append(date);
	$(".content_image_drawing").css("src", );
	$(".content_media_drawing").append();
	$(".content_page").css("display", "block");
}