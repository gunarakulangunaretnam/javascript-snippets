var obj1={
	
	num1:5,
	num2:7
	
}

obj2 = {

    num1: 10,
    num2:20
}

function addTothis(a,b,c,d,e,f){
	
	
	return this.num1+a+b+c+d+e+f-this.num2;
	
}

var argValues=[2,3,6,5,4,2];
var argValues2 = [5, 5, 5, 5, 5];

var ans1=addTothis.apply(obj1,argValues);

alert(ans1);


/*

*apply calls a specific function with an object values
 and with an array values.
 .
 
 *In call method we have to pass arguments (paramers) values one by one.
  But in apply method we can pass arguments values in an array formet.
  This is the differences between call() and apply().


 */
