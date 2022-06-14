window.onload = newCard;

function newCard() {


    for (var i = 0; i < 24; i++) {

        setSquare(i);//We call the setSquare function with the index value.
    }
    
 
}


function setSquare(thisSquare) {//The index value gets in the thisSquare paramter variable.

    var currSquare = "square" + thisSquare;//We add square with the index number value.

    var newNum = Math.floor(Math.random() * 75) + 1;//We get the deciaml point number between 754to 0;

    document.getElementById(currSquare).innerHTML = newNum;


}