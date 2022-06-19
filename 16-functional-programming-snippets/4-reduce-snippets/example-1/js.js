var order = [

    { amount:250},
    { amount: 150},
    { amount: 50},
    { amount: 80 },
    { amount: 85 },
    { amount: 115 }

]


var total = order.reduce(function (sum, order) {

    return sum + order.amount;



}, 0);//Here the 0 is the starting point.

alert(total);


//sum is the first iteration and the order is the second iteration it will add together untill the iteration process is finshed.
//reduce is the multi tools for list transformations.It can be used to express any list transformations.