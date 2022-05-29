var names = ["Joker", "Hacker", "Maker", "Kuna", "Rakulan"];

function sub(currentValue,index,array){
	
	return currentValue[0]==="H";
	
}

var a=names.some(sub);
alert(a);


/*Notes 

*some is an array method.
*it checks if one of the element in an array pass a test.

*in line five currentValue[0] is mean the first letter of the currentValue.


you can also do it like this.

names.some(function(currentValue,index,array){
	
	return currentValue[0]==="H";
	
})


*/