var arr = new Array("dasd");

function cher(arr) {

    return arr.constructor.toString().indexOf("Array") > -1;
}

alert(cher(arr));


//This program checks if an object is an Array or not.