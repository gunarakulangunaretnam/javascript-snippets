window.onload = function () {

    document.getElementById("click").onclick = fun;
}


var counter = 0;

function fun() {


    document.getElementById("dis").innerHTML = counter++;

}

