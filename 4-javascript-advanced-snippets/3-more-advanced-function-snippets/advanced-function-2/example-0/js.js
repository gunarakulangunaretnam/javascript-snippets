function mainFun(a,b){
	
	function subFun1(){
		
		alert(a+b);
		
	}
	
	return function(){
		
		alert(a-b);
		
	}
	
}

var a=mainFun(10,2);

a();


/*Notes
*We can directly give the function like this.
*We can return a nested function inside the parent function.
*The return value stored in the parent function so we have to catch the value in a variable.
*Then run the variable with "()" this.
*Keep it in mind when we are returning a nested function we don't have to use the ().Just type function name.

*/