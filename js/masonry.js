$("#downArrow").click(function(){
		if ($('#Sculpture_link').hasClass("current")) {
			$("#grid_sculpture").css("display", "block");
			$('.grid').masonry({
			    citemSelector: '.grid-item',
			    percentPosition: true,
			    columnWidth: '.grid-sizer'
			});
		} else if ($('#Drawing_link').hasClass("current")) {
			$("#grid_drawing").css("display", "block");
			$('.grid').masonry({
			    citemSelector: '.grid-item',
			    percentPosition: true,
			    columnWidth: '.grid-sizer'
			});
		}
	});