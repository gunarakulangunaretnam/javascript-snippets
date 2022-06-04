window.onload=function(){
	
	document.getElementById("txt1").onkeydown=myFunction;
	
}

function myFunction(event){
	
	var code=event.keyCode,
	altKey=event.altKey,
	ctrlKey=event.ctrlKey,
	shiftKey=event.shiftKey,
	capsKey=event.capsKey;
	
	
	if(ctrlKey&&code===66){
		
		alert("You pressed ctrlKey and b or B");
		
	}
	

}


/*Notes

*The keydown method can return altKey,ctrlKey,shiftKey and any other modifier keys.
*You can applay this method to keyup event.
*Keep it in mind the keydown and keyup events do not care about the lowercase letter.
*if any modifier key presses it returns true or false.
 Ex:if altKey presses it returns true otherwise false.
 
 66==b
 
*/