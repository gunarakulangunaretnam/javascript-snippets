window.onload = function () {

    document.getElementById("btn1").onclick = fun;
}

function fun() {

    var btn = document.getElementById("btn1");
    btn.style.color = "green";
    
    btn.onclick = function () {

        var btn2 = document.getElementById("btn1");
        btn2.style.color = "red";

        btn2.onclick = function () {

            document.getElementById("btn1").style.color = "yellow";

        }

    }


}