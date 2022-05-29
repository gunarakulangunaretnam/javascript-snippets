var pizza = {

    crust: "thin",
    toppings: 3,
    hasBecan: true,
    howmanyTopping: function () {

        return this.toppings;

    }

};

pizza.price = "12$"//This is how add properties to an object after the creation of the object.We can also add methods,Array boolean values and etc.

alert(pizza.howmanyTopping());//This is how call a function inside the object.

delete (pizza.crust);//This is how delete an object properties or anything form an object.

