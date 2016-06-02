var myKitties = [{title: "First Project", pic:"img/cuba-web.jpg"}, 
	{title: "Second Project", pic: "img/rome-web.jpg"},
	{title: "Third Project", pic: "img/sagrada-familia-web.jpg"},
	{title: "Fourth Project", pic: "img/landscape.jpg"}];


$(document).ready(function(){
	$(".message-box").css("background-color","pink");
	
	$("#button").click (function() {
		console.log( "clicked" );
		var comment = $(".message-box").val();	
		console.log(comment);
		$("#visible-comment").html(comment);
		return false;
	});		
	
	$(".message-box").on("keyup", function(){
		console.log("keyup happened");
		var charCount = $(".message-box").val().length;
		console.log(charCount);
		$("#char-count").html(charCount);
		$("#char-count").css("color", "black");

		if(charCount > 50) {
			$("#char-count").css("color", "red");

		} else {
			$("#charCount").css("color", "black");

		};

	});

	var rows =$(".my-row");
	console.log(rows);
	for(var i=0; i<rows.length; ++i){
		if(i%2===0){
			$(rows[i]).css("background-color","#BD71A5");
		};	
	};

	for(var i=0; i<myKitties.length; ++i){
		$("#" + i).css("background-image", "url("+ myKitties[i].pic + ")" );
	};

	$(".image-jav").mouseenter( function() {
		console.log(myKitties[this.id].title);
		$(this).html("<p class='info'><span class='proj-title'>Title:</span> " +myKitties[this.id].title+ "</p>");
	}).mouseleave( function() {
		$("p.info").html("");
	});

	function initialize(){
		var mapOptions = {
			center: new google.maps.LatLng(41.8906785,-87.6245732,17),
			zoom: 12
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		var marker = new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			title: 'Click to Zoom'
		});
		google.maps.event.addListener(marker, 'click' , function(){
			map.setZoom(15);
			map.setCenter(marker.getPosition());
		});
	
	};
	google.maps.event.addDomListener(window, 'load', initialize);

});

	
	