Array.prototype.randval = function () {

    var ri = Math.floor(Math.random() * this.length);
    var val = this[ri];

    return val;
}

var my_array = ["A", "B", "C", "D", "E", "F", "G"];


var result = my_array.randval();



document.write(result);
document.write("<hr>");
document.write(my_array);


//This program won't afect the original array.