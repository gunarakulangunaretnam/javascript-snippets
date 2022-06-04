function argFun(){
	
	var value1=0;
	
	for(a=0;a<arguments.length;a++){
		
		value1+=arguments[a];
		
	}
	return value1;
	
	
}

alert(argFun(10,2,3,5,4,6,6));