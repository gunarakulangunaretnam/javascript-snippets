//This in called Dynamic Prototype Function.


var dynamicProto = function (name,age,state) {

    this.age = age;
    this.name = name;
    this.state = state;

    if (typeof this.printPerson !== "function") {//if the printPerson is not defined run the bellow code.

        dynamicProto.prototype.printPerson = function () {

            console.log(this.name + " " + this.age + " " + this.state);
        };
    }
}

var person1 = new dynamicProto("Joker", 19, "CA");

person1.printPerson();
console.log("name" in person1);//true
console.log(person1.hasOwnProperty("name"))//true

//console.dir() we use it for more details.