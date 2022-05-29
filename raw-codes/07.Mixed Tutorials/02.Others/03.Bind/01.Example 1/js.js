var obj1={
	
	num1:2,
	num2:4
	
}

var obj2={
	
	num1:4,
	num2:5
	
}

function addTothis(a,b,c,d){
		
	return (this.num1+a+b+c+d)/this.num2;

}


var bound=addTothis.bind(obj2);

var ans1=bound(1,3,2,4);
var ans2=bound(5,5,5,5);
var ans3=bound(10,5,5,6);

alert(ans1);
alert(ans2);
alert(ans3);


/*Notes

*Bind calls a function with an object values.
*Bind is like call().But it returns a function back for later use.
*The bind() method returns a brand new  function for later use.
 We can use the brand new function many times with differnt values.




*/



