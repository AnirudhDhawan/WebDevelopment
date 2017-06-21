$(document).ready(function(){
	var quote = "";
	var author ="";
	getQuote();
	$("#btn").on("click",function(){
		getQuote();
	});

	function getQuote(){
		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url,function(data){
			quote = data.quoteText;
			author = data.quoteAuthor;
			$("#quote").html(quote);
			$("#author").html("- "+author);
		});
	};



  $("#tweet").on("click", tweet);
  function tweet(){ 
    var TQuote = quote;
    var TAuthor = author;
    var url="https://twitter.com/intent/tweet?text="+ TQuote + "  -"+ TAuthor;
      window.open(url, "_blank");
  };  


	$("btn").on("click",function(){
		getQuote();
	});
});