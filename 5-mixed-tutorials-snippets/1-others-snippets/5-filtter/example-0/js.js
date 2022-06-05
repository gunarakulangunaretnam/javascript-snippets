var colors = ["black", "orange", "blue", "red", "white"];

function fillterSubfun(currentValue,index,array){
	
	return String(currentValue).length>=5;
	
}

var a=colors.filter(fillterSubfun);
alert(a);


/*Notes

*This method filters a collation of values bashed on a type.
*It finds all the values that is match with the programming style.
*It continues finding value but find method finds a single value.

*/