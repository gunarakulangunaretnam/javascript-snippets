window.onload = function () {

    document.getElementById("btn1").onclick = fun;
}

function fun() {

    var inp = document.forms["form1"]["text1"].value;

    alert(inp);

}