var my_array = ["A", "B", "C", "D", "E", "F", "G"];

var ri = Math.floor(Math.random() * my_array.length);//It gives a randam index within in the array.
var rs = my_array.splice(ri, 1);//This line of code get one element form the array.

document.write(rs);
document.write("<hr>");
document.write(my_array);