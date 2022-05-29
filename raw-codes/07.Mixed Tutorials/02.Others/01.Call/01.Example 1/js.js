var obj1={
	
	num1:3,
	num2:2
	
}
obj2 = {

    num1: 10,
    num2:20
}

function addTothis(a,b,c,d){
	
	return this.num1+a+b+c+d-this.num2;
	
}

var ans1=addTothis.call(obj1,2,2,2,2);
alert(ans1);


/*

*Call method is used to call a specific function with
 an object values and with arguments values.

*In call method we have to pass arguments (paramers) values one by one.


*/