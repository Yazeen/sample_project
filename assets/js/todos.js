$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function( event ) {
	event.stopPropagation();
	$(this).parent().fadeOut( 500, function() {
		$(this).remove();
	}); 	
});

$("input[type='text']").keypress( function( e ) {
	if( e.which == 13 ) {
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");	
	}
});

$(".fa-plus-square").on("click", function() {
	$("input[type='text']").fadeToggle(500);
});