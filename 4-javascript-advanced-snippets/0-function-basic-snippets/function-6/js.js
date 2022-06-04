function mainFun(arg1){
	
	return function(){
		
		alert(arg1)
	}
	
}

var subFun=mainFun("Kuna");
subFun();


/*Notes

*This mainFun returns a sub function inside it.The value will be stored in the main mainFun.
*So we have to catch the return value in a variable and call the variable.

*/