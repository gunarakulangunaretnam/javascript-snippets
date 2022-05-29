window.onload = function () {

    document.getElementById("k").onclick = fun;
}



function fun() {

    var a = 0;

    var img = document.getElementById("k");


    if (img.src.match("off.gif")) {

        a = 0;

    } else {

        a = 1;

    }

    if (a == 0) {

        img.src = "on.gif";

    } else {

        img.src = "off.gif";
    }


    

    
}