//This in called Prototype Function.


var peopleProto = function () {

};

peopleProto.prototype.age = 19;//default values.
peopleProto.prototype.name = "No name";//default values.
peopleProto.prototype.city = "SL"//default values.


peopleProto.prototype.printPerson = function () {

    console.log(this.name + " " + this.age + " " + this.city);

};


var person1 = new peopleProto();
//person1.name = "Joker";
person1.age = 19;
person1.city = "USA";


person1.printPerson();//This prints person object in the console window.


console.log("name" in person1)//Even though it is commend out.It will still look at in the prototype chin and returns true.
console.log(person1.hasOwnProperty("name"));//This hasOwnProperty won't care about the prototype chin.It returns false.