var joker={
	
	name:"kuna",
	job:"Software Developer"
	
}

var mainObj={
	
	mainSys:function(tarObj){
		
		for(p in tarObj){
			
			document.write(tarObj[p]+"<br>");
		}
	

	
		
	}
	
	
}

mainObj.mainSys(joker);



/*Notes

*We can pass an object to function for proessing.


*/