//This in called Constructor Function is more like class in Java.


function peopleConstructor(name, age, state) {

    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function () {

        console.log(this.name + " " + this.age + " " + this.state);

    };
};

//We have to use new keyword when we are assgining ConstructorFunction
var person1 = new peopleConstructor("joker", 23, "Sl");
var person2 = new peopleConstructor("kuna", 19, "UK");


person1.printPerson();
person2.printPerson();