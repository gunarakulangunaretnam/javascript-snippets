function X(j) {

    this.i = 0;
    this.j = j;

    this.getJ = function () {

        return this.j;
    }

}


var x1 = new X(1);
var x2 = new X(2);
alert("This is instance X one " + x1.getJ());
alert("This is instance X two " + x2.getJ());