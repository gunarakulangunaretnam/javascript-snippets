function Parentclass() {

    this.parent_property1 = "Hola";
    this.parent_method1 = function (a1) {

        return a1 + "Parent Method returns data";

    }

}


function Childclass() {

    this.child_property1 = "Adious";
    this.child_method1 = function (a1) {

        return a1 + "child Method returns data";

    }

}


Childclass.prototype = new Parentclass();//Childclass can access Parentclass mehtods and properties.


var childClassInstance = new Childclass();


alert(childClassInstance.parent_method1("Result "))//Parent Method.
alert(childClassInstance.child_method1("Result "))//Child Method.
alert(childClassInstance.parent_property1)//Parent property.
alert(childClassInstance.child_property1)//Child property.


