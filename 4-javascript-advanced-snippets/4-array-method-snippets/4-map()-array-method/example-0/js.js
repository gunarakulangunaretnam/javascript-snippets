var names = ["Joker", "Hacker", "Maker", "Kuna", "Rakulan"];


function mapSys(currentValue,index,array){
	
	return "I love "+currentValue+"<br>";
	
}

var a=names.map(mapSys);
document.write(a);


/*Notes

*The map() method creates a new array with the results of calling a function for every array element.

*The map() method calls the provided function once for each element in an array, in order.

*Note: map() does not execute the function for array elements without values.

*Note: map() does not change the original array.

*/