window.onload = function () {

    document.getElementById("btn1").onclick = fun;
}

function fun() {


    var inp = document.forms["form1"]["text1"];

    if (inp.validity.rangeOverflow) {

        alert("Value is too large");
    } else {

        alert("The Input is ok");
    }

}


