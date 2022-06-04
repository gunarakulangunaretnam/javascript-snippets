function arrSome(arr1,userInp){
	
	for(a=0;a<arr1.length;a++){
		
		if(arr1[a]===userInp){
			
			
			return true;
		}
		
	}
	return false;
	
}

var userarr=new Array(5);

for(a=0;a<userarr.length;a++){
	
	userarr[a]=Number(prompt("Enter numberic value"));
}

var myVal=arrSome(userarr,2);
alert(myVal)


/*Notes

*It is the code of sone() Array method

*/