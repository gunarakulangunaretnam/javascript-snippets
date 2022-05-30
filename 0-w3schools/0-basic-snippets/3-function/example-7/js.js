function findMax() {

    var sum = 0;

    for (i = 0; i < arguments.length; i++) {

        
        sum+=arguments[i]

    }

    return sum;
}

var a = findMax(10, 2, 3, 06, 4, 4, 70);
alert(a);