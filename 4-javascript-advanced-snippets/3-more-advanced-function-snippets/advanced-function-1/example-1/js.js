function mainFun(a,b){
	
	function subFun1(){
		
		
		alert(a+b);
		
	}
	
	function subFun2(){
		
		alert(a-b);
		
	}
	
	subFun1();
	subFun2();
	
}

mainFun(10,2);

/*Notes

*The nested functions can use the parent's function parametrs.

*/