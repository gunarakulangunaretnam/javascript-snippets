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
document.write("The sound of the animal is "+dog.getSound() + "<br>");