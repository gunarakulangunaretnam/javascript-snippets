window.onload=function(){
	
	document.getElementById("txt1").addEventListener("keydown",clearing);
	document.getElementById("txt1").addEventListener("keyup",clearing);
	
}

function clearing(){
	
	var textFiled=document.getElementById("txt1");
	var regExp=/fuck/gi;
    textFiled.value=textFiled.value.replace(regExp,"");
	
}

/*Notes

*This is real time text filtter.


*/