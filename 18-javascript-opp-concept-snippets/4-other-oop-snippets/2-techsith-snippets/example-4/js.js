//This in called Factary Pattern Object.

var peopleFactary = function (name, age, state) {


    var temp = {};

    temp.name = name;
    temp.age = age;
    temp.state = state;

    temp.printPerson = function () {

        console.log(this.name + " " + this.age + " " + this.state);
    };

    return temp;

};

var person1 = peopleFactary("Joker", 19, "SL");//In Factary Pattern we don't use new keyword.
var person2 = peopleFactary("Kuna", 18, "USA");//In Factary Pattern we don't use new keyword.


person1.printPerson();
person2.printPerson();