
document.addEventListener("DOMCotentLoaded",
	function (event) {
		document.querySelector("button").addEventListener("click",
			function(){
				$raj
				.sendGetRequest("data/name.txt",

					function(request){
						var name = request.responseText;
						console.log(name);


						document.querySelector("#content").innerHTML=
						"<h2>hello "+ name + "!</h2>";
					});
			});
	});