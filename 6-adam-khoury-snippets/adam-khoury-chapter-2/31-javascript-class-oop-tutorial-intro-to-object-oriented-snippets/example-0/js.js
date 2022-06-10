function exampleClass() {

    this.property1 = 5;
    this.property2 = "World";

    this.method1 = function (arg1) {

        return arg1 + " " + this.property2;
    }

}

var instance1 = new exampleClass();
var instance2 = new exampleClass();
var result = instance1.method1("Hello");

alert(result);

instance1.property1 = 10;//We can change the values.

alert(instance1.property1);

alert(instance2.property1);//But in instance2 i did not change the value.The value would be 5.
