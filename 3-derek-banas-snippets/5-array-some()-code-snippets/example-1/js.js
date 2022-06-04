Array.prototype.someIn = function (value) {

    for (i = 0; i < this.length; i++) {

        if (this[i] == value) {

            return true;
        } 
    }

    return false;
}

var arr = [1, 23, 5, 6, 8, 9, 5];
alert(arr.someIn(23));