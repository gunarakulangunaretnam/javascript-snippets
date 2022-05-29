function argChecker(){
	
	var arg=0;
	var i=0;
	
	while(i<arguments.length){
		
		
		arg+=arguments[i];
		i++;
	}
	
	alert("The total value is "+arg);
	alert(arguments.length);


	
	
}

argChecker(10,23,5,6,9,8,5);

/*Notes

*It returns the total value and the arguments length;

*/