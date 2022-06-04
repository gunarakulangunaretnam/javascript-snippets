function mainFun(a,b){
	
	function subFun1(){
		
		alert("The subFun1 value is "+(a+b));
		
	}
	
	subFun1();
	
	mainFun=function(a,b){
		
		alert(a-b);
		
	}
	
}


mainFun(10,2);
mainFun(10,2);
mainFun(10,5);


/*Notes

*When the first time run this program it will run the subFun1 function
 then it read the entire program the mainFun assigned to the Anonymous function then it runs second or anytime
 it runs the Anonymous function.

*/