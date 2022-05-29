window.onload = newCard;

var usedNums = new Array(76);


function newCard() {


    for (var i = 0; i < 24; i++) {

        setSquare(i);
    }
    
 
}


function setSquare(thisSquare) {

    var currSquare = "square" + thisSquare;

    var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);

    var colBasis = (colPlace[thisSquare] * 15);

    var newNum = colBasis + getNewNum() + 1;

    if (!usedNums[newNum]) {//if a number is been used don't do anything.or place it.

        usedNums[newNum] = true;

        document.getElementById(currSquare).innerHTML = newNum;

    }
}

function getNewNum() {

    return Math.floor(Math.random() * 15)
}