function arrArg(arrArg1){
	
	var localArr=[];
	
	for(d=0;d<arrArg1.length;d++){
		
		localArr.push(arrArg1[d]*2);
		
	}
	
	return localArr;
}

var myVal=arrArg([2,3,4,5]);
alert(myVal);



/*Notes
 
*We are passing arguments value in Array format.

*/

