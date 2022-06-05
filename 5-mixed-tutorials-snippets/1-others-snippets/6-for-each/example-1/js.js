var arrs=[];

arrs[0]=function(){
	
	alert("I am the first function");
	
}

arrs[1]=function(){
	
	alert("I am the second function");
	
}
 
arrs[2]=function(){
	
	alert("I am the third function");
	
}

arrs[3]=function(){
	
	alert("I am the fourth function");
	
}

arrs[4]=function(){
	
	alert("I am the fifth function");
	
}

arrs.forEach(function(currentValue,index,array){
	
	return currentValue();
	
})

