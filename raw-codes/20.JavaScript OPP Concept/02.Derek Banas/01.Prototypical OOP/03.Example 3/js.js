function Animal() {

    this.owner = "No Owner";
    this.name = "No Name";
    this.sound = "No Sound";

    //By default the animal Object is going to get These values.

}


Animal.prototype.setOwner = function (newOwner) {

    if (typeof newOwner != "undefind") {

        this.owner = newOwner;

    } else {

        document.write("Plase enter a valid owner");
    }



}

Animal.prototype.getOwner = function () {

    return this.owner;
}

Animal.prototype.setName = function (newName) {

    if (typeof newName != "undefind") {

        this.name = newName;
    } else {

        document.write("Please enter a valid name");

    }

}

Animal.prototype.getName = function () {


    return this.name;
}

Animal.prototype.setSound = function (newSound) {

    if (typeof newSound != "undefind") {


        this.sound = newSound;

    }
}



Animal.prototype.getSound = function () {


    return this.sound;
}


var dog = new Animal();


dog.setName("Gemi");
dog.setOwner("kuna");
dog.setSound();

document.write("The animal name is "+dog.getName() + "<br>");
document.write("The Owner of the animal is "+dog.getOwner() + "<br>");
document.write("The sound of the animal is " + dog.getSound() + "<br>");
document.write("<br>");//It is for make a space.


function Cat() {

    Animal.call(this);//Automatically the cat funtion is going have setName,setOwner and everthing.
    this.mode = "Happy";

}


Cat.prototype = new Animal;//It made it as super class.
Cat.prototype.constructor = Cat;//This is not very important.We can omit it if we want.



Cat.prototype.getMode = function () {


    return this.mode;
}

Cat.prototype.setMode = function (newMode) {


    if (typeof newMode != "undefind") {


        this.setMode = newMode;

    } else {

        document.write("Please enter a valid mode");
    }

}


var sophie = new Cat();

sophie.setName("sophie");
sophie.setOwner("Guna");
sophie.setSound("Miew");
sophie.setMode("Sad");


document.write("The Cat name is "+sophie.getName() + "<br>");
document.write("The owner of the cat is "+sophie.getOwner() + "<br>");
document.write("The sound of the cat is "+sophie.getSound() + "<br>");
document.write("The mode of the cat is "+sophie.getMode() + "<br>");
document.write("<br>");//It makes space.