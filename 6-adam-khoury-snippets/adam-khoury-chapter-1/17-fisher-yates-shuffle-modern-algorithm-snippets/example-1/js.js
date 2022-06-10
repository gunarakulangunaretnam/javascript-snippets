var arr = ["A", "B", "C", "D", "E", "F", "G", "H"];

Array.prototype.shuffle = function () {

    var i = this.length, j, temp;

    while (--i > 0) {

        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;



    }
    return this


}

arr.shuffle();

document.write(arr);