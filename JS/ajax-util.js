(function (global) {
	
var ajuts = {};


	function getRequestcontent(){

		if (global.XMLHttpRequest) {
			return(new XMLHttpRequest());
		}
		else if(global.ActiveXObject){
			return(new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else{
			global.alert("AJAX is not supported.");
			return(null);
		}
	}


		ajuts.sendGetRequest = function(requestUrl,responseHandler){
			var request = getRequestcontent();
			request.onreadystatechange = function(){
				handleResponse(request,responseHandler);
			};
			request.open("GET" , requestUrl,true);
		request.send(null);
	};


	function handleResponse(request,responseHandler){
		if ((request.readyState == 4) && (request.status == 200)) {
			responseHandler(request);

		}
	}


	global.$ajuts = ajuts;


})(window);