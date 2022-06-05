function myFun(x,subFun){
	
	alert("I love "+x);
	subFun();
	
}


function fun1(){
	
	alert("Hello my name is kuna");
	
}

myFun("Programming",fun1);


/*Notes

*callback means we send an entire function as an argument value.

*/