function Pepole(name,age){
	
	this.name=name;
	this.age=age;
	this.yearsLeft=yearsLeft;
	
}

function yearsLeft(){
	
var leftYears=65-this.age;
	
	return leftYears;
}

var kuna=new Pepole("Guna",19);

alert(kuna.yearsLeft());


/*Notes

*We can add methods to constructor function.
*Keep it in mind you have to use the Parentheses when you call it

*/
