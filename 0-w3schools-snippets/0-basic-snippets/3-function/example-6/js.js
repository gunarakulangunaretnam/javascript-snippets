function findMax() {

    var max = Infinity;
    
    for (i = 0; i < arguments.length; i++) {


        if (arguments[i] < max) {

            max = arguments[i];
        }


    }

    return max;
}


var a = findMax(10, 2, 3, 6, 5, 48, 6);
alert(a);

var b = Infinity;
var c = 40;


if (c < b) {

    alert("yes");
}