var order = [

    { amount:250},
    { amount: 150},
    { amount: 50},
    { amount: 80 },
    { amount: 85 },
    { amount: 115 }

]


var total = 0;

for (i = 0; i < order.length; i++) {

    total += order[i].amount;


}
alert(total);