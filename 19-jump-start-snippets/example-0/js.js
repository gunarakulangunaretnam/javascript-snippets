var color = "red";

if (color) {

   var color = "blue";//This is Globel Variable.

    console.log("Inside If statement "+color);//This statement prints blue.
}

console.log("Outside " + color);//This statement prints blue.


//As you can see the color variable in the if statement is globel and though it is declared as a new variable
//in the if statement.It is not considered local because it is not in an function.