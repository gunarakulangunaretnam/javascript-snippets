var Pizza = function () {

    var curst = "thin";//This is Priviate variable.We can't call it outside.We can use this kind of variable to keep secrt values.
    var topping = 6;

    this.hasBecan = true;//This is public variable.We can call it outside.


    this.getHasBecan = function () {

        return this.hasBecan;

    }

    this.getCrust = function () {

        return curst;// we can access priviate variables using public methods.
    }

    var getTopping = function () {//This is priviate method.

        return topping;
    }

}

var pizzaA = new Pizza();

console.log(pizzaA.crust);//undefined.
console.log(pizzaA.getHasBecan());//returns 'true'.
console.log(pizzaA.getCrust());//returns 'thin' we can access priviate variables using public methods.
console.log(pizzaA.getTopping());//It will not work.Becase that is priviate function.