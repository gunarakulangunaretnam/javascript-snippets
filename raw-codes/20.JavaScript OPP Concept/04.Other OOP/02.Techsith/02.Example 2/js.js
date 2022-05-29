var Pizza = function () {//This is the function object.It can be also make as function Pizza(){ codes }.

    this.crust="thin",
    this.toppings=3,
    this.hasBecan = true

}

var pizzaA = new Pizza();
var pizzaB = new Pizza();//We can create a lof instances bashed on a function object.


pizzaA.crust="Pan"//I have changed the pizzaA curst to 'Pan' But the pizzaB won't be changed.It will be 'thin'.

alert("This is PizzaA " + pizzaA.crust);
alert("This is PizzaB " + pizzaB.crust);

console.log(pizzaA instanceof Pizza);//true.
console.log(pizzaB instanceof Pizza)//true.



//But in function object we can't access like Pizza.crust or Pizza.hasBecan.If we want to access we need to create an instance like above.
