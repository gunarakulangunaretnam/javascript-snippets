function findMax() {

    var max = -Infinity;

    for (i = 0; i < arguments.length; i++) {

        if (arguments[i] > max) {

            max = arguments[i];


        }

    }

    return max;
}

var a = findMax(10, 2, 3, 06, 4, 4, 70);

alert(a);

