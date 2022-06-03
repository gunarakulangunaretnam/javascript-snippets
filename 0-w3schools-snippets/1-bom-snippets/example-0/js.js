window.onload = function () {

    document.getElementById("open").onclick = openFun;
    document.getElementById("close").onclick = closeFun;
    document.getElementById("check").onclick = checkFun;

}

var myWin;

function openFun() {

    myWin = window.open("www.google.lk", "kuna", "width=250, height=250");


}

function closeFun() {

    if (myWin) {

        myWin.close();
    }

}


function checkFun() {

    if (!myWin) {//The Window never Open.This is mean this is the first time.

        document.getElementById("dis").innerHTML = "The window has never been open yet";


    }
    else if (myWin.closed == true) {

        document.getElementById("dis").innerHTML = "The Window is being closed";
    } else {

        document.getElementById("dis").innerHTML = "The is Open";

    }
}


