function function_1(a,b,newFun){
	

 	alert(a+b);

    newFun(10,3);	
	
}

function function_2(c,d){
	
	
	alert(c-d);
}

function_1(10,2,function_2);


/*Notes

*When we send a function as an argument value we don't have to use this '()'.
*Only when we are calling a function we have to use it '()'.


*/