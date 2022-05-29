window.onload = function () {

    document.getElementById("btn1").onclick = FnameAndLnameFun;

}


function names(x,y) {


    alert(x + " " + y);

}



function FnameAndLnameFun() {

    names(document.getElementById("txt1").value, document.getElementById("txt2").value);

}