function mainFuntion(a,b,fun1,fun2){
	
	alert("The Main function value is "+(a+b));
	fun1(a,b);
	fun2(5,5);
}

function function_1(c,d){
	
	alert("The Function 1 value is "+(c-d));
	
	
}

function function_2(e,f){
	
	alert("The Function 2 value is "+(e*f));
	
}


mainFuntion(10,2,function_1,function_2);


/*Notes

*We can send a thousand of functions as arguments value.

*/