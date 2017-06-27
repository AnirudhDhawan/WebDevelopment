$(document).ready(function(){
	$('.results').empty();
	$('.results').append("<h1>Twitch Streams<h1>");
	var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var urlStart = "https://wind-bow.glitch.me/twitch-api/streams/";
	for (var i = 0; i < userNames.length; i++) {
		var urlEnd = userNames[i];
  		var url = urlStart+urlEnd;
  		callApi(url,urlEnd);	
  	}

  	function callApi(url,urlEnd){
  		$.getJSON(url,function(data){
  				displayContent(data,urlEnd);
  		});
  	}

	function displayContent(data,urlEnd){
		if(data.stream == null){
  			$('.results').append("<div><h3>" + urlEnd + "</h3> <p>Offline</div>");
  		}
 		else{
  			var title = urlEnd;
			var des = data.stream.channel.status;
			$('.results').append("<div><h3><a target = '_blank' href = 'https://www.twitch.tv/" + title + "'>" + title + "</a></h3> <p>" + des + "</div>");
  		}
	};
});