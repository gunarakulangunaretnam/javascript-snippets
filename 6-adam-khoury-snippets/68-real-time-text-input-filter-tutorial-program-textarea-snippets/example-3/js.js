window.onload=function(){
	
	document.getElementById("txt1").addEventListener("keydown",clearing);
	document.getElementById("txt1").addEventListener("keyup",clearing);
	
}

function clearing(){
	
	var textFiled=document.getElementById("txt1");
	var regExp=/[^a-z 0-9]/gi;
	
	if(textFiled.value.search(regExp)>-1){
		
		document.getElementById("display1").innerHTML="We only allow [a-z,0-9]";
		textFiled.value=textFiled.value.replace(regExp,"");
	}
	
	
	
}

/*Notes

*This is program only allow [a-z,0-9];



*/