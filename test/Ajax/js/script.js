document.addEventListener("DOMContentLoaded", function(event){
	document.querySelector("button").addEventListener("click", function (event){
		$ajaxUtils.sendGetRequest("data/name.txt", function (request){
		 	var name = request.responseText;

			document.querySelector("#content").innerHTML = "Hello " + name + "!";
		});
	});
});

