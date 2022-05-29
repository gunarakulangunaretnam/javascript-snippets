function Person(fname, lname) {

    this.fname = fname;
    this.lname = lname;

    this.sayName = function () {


        return this.fname + " " + this.lname;

    }


}



var kuna = new Person("Kuna", "Rakulan");
var joker = new Person("Joker", "Hacker");

var isPerson = kuna instanceof Person;//true
var isSame = kuna.sayName === joker.sayName;//false

alert(isPerson);
alert(isSame);

