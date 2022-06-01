window.onload = function () {

    document.forms.kuna.dis.onclick = function () { fun() };
}


function fun() {

    var inp = document.forms.kuna.txt.value;
    alert(inp);
}