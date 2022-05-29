var arr1=["Kuna","Rakulan","Gta","Hacker","Joker"];


function sub(currentValue,index,array){
	
	return typeof currentValue==="string";
	
}

var a=arr1.every(sub);
alert(a);

/*
*every() is an array method.
*every()method checks if all elements in an array pass a test.

you can also do it like this.

arr1.every(function(currentValue,index,array){
	
	return typeof currentValue==="string";
	
})

*/