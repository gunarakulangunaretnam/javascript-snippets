//Establish parent class.


function Parentclass() {

    this.parent_property_1 = "Hola";

    this.parentmethod1 = function parentmethod1(arg1) {

        return arg1 + " parentmethod_1 returns data..";
    }

}

//Establish child class.

function Childclass() {

    this.child_property_1 = "Adios";

    this.childmethod1 = function childmethod1(arg1) {
        
        return arg1 + " child method returns data...";

    }
}


//Make the Childclass inherit all of the parent characeristics by using the prototype property.


Childclass.prototype = new Parentclass();

//Creates a new instance of Childclass.

var instance1 = new Childclass();


//Checks to see if instance1 is an instance of both object.

alert(instance1 instanceof Parentclass);
alert(instance1 instanceof Childclass);




