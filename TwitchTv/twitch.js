$(document).ready(function(){
  $('.results').empty();
  $('.results').append("<h1>Twitch Streams<h1>");
  var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404","brunofin"];
  var baseUserContentUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
  var baseUserCheckUrl = "https://wind-bow.glitch.me/twitch-api/users/";
  

  userNames.forEach(function (userName) {
    var userCheckUrl = baseUserCheckUrl + userName;
    $.getJSON(userCheckUrl, function (data) {
      if (userExists(data)) {
        var userContentUrl = baseUserContentUrl + userName;
        $.getJSON(userContentUrl, function (data) {
          displayContent(data, userName);
        });
      }
      else {
        $('.results').append("<div><h3>" + userName + "</h3> <p>User Does Not Exist</div>");
      }
    });
  });

  function userExists(data) {
    return (data.error !== "Not Found");
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