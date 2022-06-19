var color = "blue";

function printColor() {

    var color = "purple"//This is a local variable.
    console.log("This is local variable inside the function"+color);//This prints purple.

}

printColor();
 
console.log("This is globel variable outside the function "+color);//This prints blue.


//As you can see the local variable is labled as purple,and is only purple within the printColor function.

//Though both the local and globel variable have the same name,The local variable will take precedence over the globel variable
//in the printColor function.