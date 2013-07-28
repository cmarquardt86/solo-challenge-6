$(document).ready(function(){
	$('a').click(function() {
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/color"
		}).done(function(data) {
			$('li:nth-child('+data.cell+')').css('background-color', data.color)
		}).fail(function() {
			console.log("fail");
		});
	
	});

});
