window.onload = initAll;

var usedNums = new Array(76);


function initAll() {

    document.getElementById("reload").onclick = anotherCard;
    newCard();
    
 
}

function newCard() {

    for (var i = 0; i < 24; i++) {

        setSquare(i);
    }

}


function setSquare(thisSquare) {

    var currSquare = "square" + thisSquare;

    var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);

    var colBasis = (colPlace[thisSquare] * 15);

    var newNum;

    do {

        newNum = colBasis + getNewNum() + 1;


    } while (usedNums[newNum]);


        usedNums[newNum] = true;

        document.getElementById(currSquare).innerHTML = newNum;

   
}

function getNewNum() {

    return Math.floor(Math.random() * 15)
}

function anotherCard() {

    for (var i = 1; i < usedNums.length; i++) {

        usedNums[i] = false;


    }

    newCard();
    return false;
}


//This program does not have to reload the page.I mean it does not have to request the server.
