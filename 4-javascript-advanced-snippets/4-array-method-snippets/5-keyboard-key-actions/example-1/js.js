window.onload=function(){
	
	document.getElementById("txt1").onkeypress=myFunction;
	
}

function myFunction(event){
	
	var code=event.charCode;
	
	if((code>=65 && code<=90)||(code>=97&&code<=122)){
		
		document.getElementById("txt1").style.color="red";
		
	}else{
		document.getElementById("txt1").style.color="green";
	
		
	}
}


/*Notes


*if any key presses between 65 and 122 the text color will be red.
 or the the text color will be green. 

 charCode ASSII code
 
 0 48
 9 57
 
 A 65
 B 66
 Z 90
 
 
 a 97
 z 122


*/