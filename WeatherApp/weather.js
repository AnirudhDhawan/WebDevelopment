$(document).ready(function(){
	var latitude = "";
	var longitude ="";
	var API_KEY = "d5e6c4723f5944e20aa93e60f5103fba";
	var url = "";
	var temp = 0;
	var des = "";
	var locName = "";
	var weatherDetail = "";

    navigator.geolocation.getCurrentPosition(function(position){
      	latitude = position.coords.latitude;
      	longitude = position.coords.longitude;
      	url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;
      	$.getJSON(url,function(data){
			temp = data.main.temp;
			des = data.weather[0].main;
			locName = data.name;
			weatherDetail = data.weather[0].description;
			getWeatherF();
			if (des == "Clouds") {
				document.getElementById("app").style.backgroundImage = "url('https://guardian.ng/wp-content/uploads/2016/09/Nature___Other_Cloudy_weather_on_the_road_092911_.jpg')";
			}
			else if (des == "Clear"){
				document.getElementById("app").style.backgroundImage = "url('https://www.proceilingtiles.com/images/D/ST-17924327-f.jpg')";
			}
			else if (des == "Rain"){
				document.getElementById("app").style.backgroundImage = "url('http://whatsupnewp.com/wp-content/uploads/2015/10/16292-rain-window.jpg')";
			}
		});
   	});



	$("#btnF").on("click",function(){
		getWeatherF();
	});

	$("#btnC").on("click",function(){
		getWeatherC();
	});

	function getWeatherF(){	
		tempF = convertKtoF(temp);
		$("#location").html(locName.toUpperCase());
		$("#weather").html(tempF+" &#8457");
		$("#desc").html(weatherDetail.toUpperCase());
	};

	function getWeatherC(){			
		var tempC = convertKtoC(temp);
		$("#location").html(locName.toUpperCase());
		$("#weather").html(tempC + " &#8451");
		$("#desc").html(weatherDetail.toUpperCase());
	};

	function convertKtoF(tempK){
		return Math.round((tempK * (9/5)) - 459.67);
	};

	function convertKtoC(tempK){
		return Math.round(tempK-273.15);
	}
});