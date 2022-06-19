function Pizza(price) {

    this.price = price || 10;

}

Pizza.prototype.getPrice = function () {

    return this.price;
}

function ExtraCheese(pizza) {

    var pervPrice = pizza.price;

    pizza.price = pervPrice + 1;

}


var myPizza = new Pizza(10);

ExtraCheese(myPizza);//This is add extra Cheese.

document.write("The Pizza $ " + myPizza.price);