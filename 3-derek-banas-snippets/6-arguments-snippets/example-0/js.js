function getArgs(){
	
	var totalArgs=0;
	
	for(u=0;u<arguments.length;u++){
		
		totalArgs+=arguments[u];
		
	}
	
	return totalArgs;
	
}

var a=getArgs(1,2,3,6,5,4,9,5);
alert(a);


/*Notes 

*It is returns the all arguments value.

*/