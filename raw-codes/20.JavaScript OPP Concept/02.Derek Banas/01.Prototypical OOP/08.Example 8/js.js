Array.prototype.inArray = function (value) {

    for (var i = 0; i < this.length; i++) {


        if (this[i] === value) {


            return true;
        }
    }

    // Or Once it All iteration finished. and Then not found return false.

    return false;//But if you put the 'return false' inside the for loop block or in else statement it will still retun false.
}



var ar = [1, 2, 3, 4, 5];

document.write(ar.inArray(2));


//We can also access JavaScript build in objects.
