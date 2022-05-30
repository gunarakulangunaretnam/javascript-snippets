function addTogether() {

    var sum = 1000;

    for (i = 0; i < arguments.length; i++) {


        sum = sum - arguments[i];


    }

    return sum;

}


var a = addTogether(10, 2, 3, 6, 5, 4, 8, 9, 7);
alert(a);