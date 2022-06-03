function fun1(){
	
	document.write("This is function one");
	fun2();
	
}


function fun2(){
	
	document.write("This is function two");
	fun1();
	
}

fun1();


/*Notes

*It's a looping function.
*it calls the functions again and again.


*/