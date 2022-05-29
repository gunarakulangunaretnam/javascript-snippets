function Person(fname, lname) {

    this.fname = fname;
    this.lname = lname;


}


Person.prototype.sayName = function () {

    return "My name is " + this.fname + " " + this.lname;

}



var kuna = new Person("Kuna", "Rakulan");
var joker = new Person("Joker", "Hacker");

var isPerson = kuna instanceof Person;//true
var isSame = kuna.sayName === joker.sayName;//Now Becomes true.

alert(isPerson);
alert(isSame);

