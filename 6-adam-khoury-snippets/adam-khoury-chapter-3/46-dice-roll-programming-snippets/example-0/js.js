function rollDice() {

    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 6) + 1;//This line of means to get numbers between 1 and 6
    var d2 = Math.floor(Math.random() * 6) + 1;//This line of means to get numbers between 1 and 6

    var diceTotal = d1 + d2;

    die1.innerHTML = d1;
    die2.innerHTML = d2;

    status.innerHTML = "You rolled " + diceTotal;

    if(d1==d2){
    
        status.innerHTML = "DOUBLES you got a free turn";

    }

}