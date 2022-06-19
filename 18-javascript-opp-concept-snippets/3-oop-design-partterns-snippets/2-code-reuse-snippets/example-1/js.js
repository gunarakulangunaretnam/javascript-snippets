function extend(target) {//target is the passing object.

    if (!arguments[1]) {//If we don't have anything just return.

        return;

    }

    for (var ii = 1, ll = arguments.length; ii < ll; ii++) {//why i start ii form 1 because to skip the target Object.

        var source = arguments[ii];

        for (var prop in source) {

            if (!target[prop] && source.hasOwnProperty(prop)) {// when the target does not have these properties and source has it's own property run this block of code

                target[prop] = source[prop];//Assgin the target[prop] to source[prop].

            }
        }


    }

}



function Person(name) {

    this.name = name;
}

function Dog(name) {

    this.name = name;
}



var speaker = {


    speak: function () {

        return this.name + " is Speaking";
    }
};

var mover = {

    walk: function () {

        return this.name + " is walking";
    },

    run: function () {

        return this.name + " is running";
    }

};

var arithematic = {

    add: function () {

        return this.name + " is adding";

    },

    mutiply: function () {


        return this.name + " is multiplying";

    }

}

extend(Person.prototype, speaker, mover, arithematic);
extend(Dog.prototype, speaker, mover);//but Dog object does not have the arithematic object that's why Dog object can't do arithematic.



var guna = new Person("Kuna");
var gemi = new Dog("Gemi");

document.write(guna.walk()+"<br>")//guna can walk.
document.write(gemi.walk() + "<br>")//gemi can run.
document.write(guna.add() + "<br>")//guna can run.
document.write(gemi.add())//It will return an error because the arithematic object does not define to Dog Object.


