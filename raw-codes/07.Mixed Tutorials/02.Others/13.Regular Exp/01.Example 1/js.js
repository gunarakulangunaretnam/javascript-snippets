window.onload=function(){
	
	document.getElementById("b1").onclick=getNums;
	
}

function getNums(){
	
	var inpStr=document.getElementById("txt1").value;
	var result=inpStr.match(/\d+/g);
	
	if(result!=null){
		
		for(y=0;y<result.length;y++){
			
			document.getElementById("dis").innerHTML=result[y]+"\r"+"\n";
			
			
		}
		
	}
	
}


/*Notes 

*This program gets only numbers and stored in the display.

*/