function Beverage(name, temperature) {

    this.name = name;
    this.temperature = temperature;

}

Beverage.prototype.drink = function () {

    return "I'm Drinking " + this.name;

};


function Coffee(type) {

    Beverage.call(this, "Coffee", "Hot");//we call the Beverage object.
    this.type = type;

}

Coffee.prototype = Object.create(Beverage.prototype);//It's like Coffee.prototype = new Beverage();
//Now the Coffee Object can be accesed everthing inside the Beverage Object.

Coffee.prototype.sip = function () {

    return "Sipping Some Awesome " + this.type + " " + this.name;

};


var water = new Beverage("water", "Cold");
var coffee = new Coffee("Bold roest ");


document.write(water.drink() + "<br>")
document.write(coffee.drink() + "<br>");
document.write(coffee.sip());