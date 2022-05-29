function mainFun(a,b,fun){
	
	return fun(a,b);
	
}

function function_1(a,b){
	
	return a+b;
	
}

function function_2(a,b){
	
	return a-b;
	
}

var rel1=mainFun(5,2,function_1);
var rel2=mainFun(3,2,function_2);

alert(rel1);
alert(rel2);



/*Notes



*/