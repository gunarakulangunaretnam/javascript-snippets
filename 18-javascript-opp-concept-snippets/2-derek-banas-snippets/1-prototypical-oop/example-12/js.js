function Animal() {

    this.name = "Animal";

    this.toString = function () {

        return "My name is " + this.name;
    }


}



function Canine() {

    this.name = "Canine";

}

function Wolf() {

    this.name = "Wolf";

}

Canine.prototype = new Animal();//We can access everyting inside the Animal Object in Caine or Wolf Objects.//This method called inheritance
Wolf.prototype = new Canine();//Wolf is joined with Canine the Canine is Joined with Animal It's like Wolf -> Canine -> Animal.The Three objects are joined together. 

Canine.prototype.constructor = Canine;//We Must assgin it after inheritanced.
Wolf.prototype.constructor = Wolf;//We Must assgin it after inheritanced.


var arcticWolf = new Wolf();


document.write(arcticWolf.toString() + "<br>");

document.write("Wolf instance of Animal " + (arcticWolf instanceof Animal)+"<br>");//true.


Animal.prototype.sound = "Grrr";

Animal.prototype.getSound = function () {


    return this.name + ' says ' + this.sound;

}




document.write(arcticWolf.getSound());


//Canine.prototype.sound = "Wolf";//we can also assign properties for Canine
//Wolf.prototype.sound = "Grr wolf";//we can also assign properties for Canine


function Rodent() {

    this.name = "Rodent";

}

function Rat() {

    this.name = "Rat";
}


Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype;//It is also like  Rat.prototype = new Rodent();


Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

document.write(caneRat.toString() + "<br>");