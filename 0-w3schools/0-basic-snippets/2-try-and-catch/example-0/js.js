window.onload = function () {

    document.getElementById("valid").onclick = fun;
}


function fun() {

    var inp = document.getElementById("txt1").value;
    var dis = document.getElementById("dis");

    try {
		
        if (inp == "") throw "Empty";
        if (isNaN(inp)) throw "String";
        if (inp>0&&inp<10) throw "ok";
        if (inp > 10) throw "Over";



    } catch (err) {

        dis.innerHTML = "The input is " + err;
    }

}