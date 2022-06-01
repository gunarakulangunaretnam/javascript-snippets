window.onload = function () {

    document.getElementById("btn1").onclick = fun;
}

function fun() {


    var inp = document.forms["form1"]["text1"];

    if (inp.validity.rangeOverflow) {

        alert("Value is too large");

    } else if (inp.validity.rangeUnderflow) {

        alert("Value is too small");

    }else {

        alert("The Input is ok");
    }

}


//The HTML 5 Constraint Validation API Automatically genarates Customs Errors.