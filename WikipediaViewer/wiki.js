$(document).ready(function(){

	$("#search").on("click",function(){
		getData();
	});

	function getData(){
		var front = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';
  		var input = $('#searchTerm').val();
  		var back = '&callback=?';
  		var url = front+input+back;
  		$.getJSON(url,function(data){
  			displayContent(data);
  		});
	}

	function displayContent(data){
		var pages = data.query.search;
		$('.results').empty();
		pages.forEach(function(page) {
      		var url_title = page.title.split(' ');
      		url_title = url_title.join('_');
      		$('.results').append("<div><h3><a target = '_blank' href = 'https://en.wikipedia.org/wiki/" + url_title + "'>" + page.title + "</a></h3> <p>" + page.snippet + "</div>");
    	});
	};

});
