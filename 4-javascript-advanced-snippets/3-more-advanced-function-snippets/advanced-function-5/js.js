window.onload=function(){
	
	document.getElementById("b1").onclick=tryMe;
}

function tryMe(){
	
var newBtn=document.getElementById("b2");
	newBtn.value="I can work";
	newBtn.style.color="red";
	
	newBtn.onclick=function(){
		
		alert("Now I can work");
		
	}
}

/*Notes

*In this program i have two buttons.
*The first button make the second button to work.
*The codiing is above.

*/