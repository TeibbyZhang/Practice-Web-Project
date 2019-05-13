$(".choose_box").click(function(event) {
	event.stopPropagation();
	/* Act on the event */
	if($(this).children('.select_box').is(':hidden')) {
		$(this).children('.select_box').stop().slideDown(500);
	} else {
		$(this).children('.select_box').stop().slideUp(500);
	}
});
$("body").on("click", function(event) {
	if(!$(event.target).is($("li.choose_box")) && $(".select_box").is(':visible')) {
		$(".select_box").slideUp(500);
	}
});