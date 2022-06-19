function Person(fullName, favColor) {//Always use upper-case for blue Prints.Not Improtant.

    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {

        console.log("My name is " + this.name + " and my favorite Color is " + this.favoriteColor + ".");

    }


}


var joker = new Person("Joker Hacker", "Red");
var kuna = new Person("Kunarakulan", "Blue");

joker.greet();
kuna.greet();
