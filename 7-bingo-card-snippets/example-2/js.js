window.onload = newCard;

function newCard() {


    for (var i = 0; i < 24; i++) {

        setSquare(i);
    }
    
 
}


function setSquare(thisSquare) {

    var currSquare = "square" + thisSquare;

    var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);

    var newNum =(colPlace[thisSquare]*15)+ Math.floor(Math.random() * 15) + 1;

    document.getElementById(currSquare).innerHTML = newNum;


}