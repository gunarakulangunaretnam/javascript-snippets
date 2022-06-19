var xmlHttp=createXmlHttpRequestObject();


function createXmlHttpRequestObject(){ //This is Ajax basic function.
	
	var xmlHttp;
	
	if(window.ActiveXObject){
		
		try{
			
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			
			
		}catch(e){
			
			xmlHttp=false;
			
			
		}
		
	}else{
		
		try{
			
			xmlHttp=new XMLHttpRequest();
			
			
		}catch(e){
			
			xmlHttp=false;
			
		}
		
	}
	
	if(!xmlHttp)
		alert("cant create that object hoss");
	
	else 
		
	return xmlHttp;
	
	
}

function process(){//This function is for communicating with server.
	
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
		
		food=encodeURIComponent(document.getElementById("userInput").value);
		xmlHttp.open("GET","foodStore.php?food="+food,true);
		xmlHttp.onreadystatechange=handleServerResponse;
		xmlHttp.send(null);
	
	}else{
		
		setTimeout('process()',1000)//This code means i the server is busy try again after 1 seconds.
		
	}
	
}

function handleServerResponse(){//This function is for reciving response form server.

	if(xmlHttp.readyState==4){//state number 4 is done communicating.
		
		
		if(xmlHttp.status==200){//status==200 means communication is ok maybe the server is down this wouldn't be to 200.
		
			xmlResponse=xmlHttp.responseXML;
			xmlDocumentElement=xmlResponse.documentElement;
			message=xmlDocumentElement.firstChild.data;
			document.getElementById("userInput").innerHTML=message;
			setTimeout(process(),1000);
			
		}else{
			
			alert("Somethig went wrong");
			
			
		}
		
	}
	
}