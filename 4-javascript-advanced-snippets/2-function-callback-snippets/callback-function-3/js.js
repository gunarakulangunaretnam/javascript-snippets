function mainFun(a,b,subFun){
	
	alert(a+b);
	subFun(a,b);
	
}

mainFun(10,2,function(x,y){alert(x-y)});



/*Notes

*We can also give the function while we are invoking.

*/