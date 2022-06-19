function exampleClass() {//This is the class code bluePrint.

    this.property1 = 5;
    this.property2 = "World";
    this.method1 = function (arg1) {

        return arg1 + " " + this.property2;

    };

}


//This is the useage code of the class.
var instance1 = new exampleClass();
var instance2 = new exampleClass();

var result = instance1.method1("Hello");

alert(result);

instance1.property1 = 10;//instance1 value has been changed to 10 but not instance2.

alert("This is instance1 "+instance1.property1);
alert("This is instance2 "+instance2.property1);//It's default 5

