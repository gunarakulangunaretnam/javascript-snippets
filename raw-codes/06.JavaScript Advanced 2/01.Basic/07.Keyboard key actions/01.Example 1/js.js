window.onload=function(){
	
	document.getElementById("txt1").onkeypress=myFunction;
	
}

function myFunction(event) {
    var x = event.charCode;
    document.getElementById("dis1").innerHTML = "The Unicode value is: " + x;
}


/*Notes

 
*keydown This occurs wnen the user presses any key the on the keyborad.
*keyup that occurs when the the user releses  any key on the keyborad.
*keypress event does not occur for modifier keys such as shift,alt,control,and caps lock.
 This is the differnce between the keypress and the keydown and the keyup.
 because the keydown and the keyup does work for modifier keys.
 the keypress event Primarily designed for user input.
 
 
*/