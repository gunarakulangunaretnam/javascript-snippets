window.onload = newCard;

function newCard() {


    for (var i = 0; i < 24; i++) {

        var newNum = Math.floor(Math.random() * 75) + 1;//We get decimal numbers between 0 to 74.We use Math.foor property get deciaml number.
        document.getElementById("square" + i).innerHTML = newNum;
    }
    
 
}