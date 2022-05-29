window.onload = function () {

    document.getElementById("btn1").onclick = newFun;
}

function newFun() {

    var btn = document.getElementById("btn1");

    if (btn.value == "on") {

        btn.value = "off";
        btn.style.color = "red";

    } else {

        btn.value = "on"
        btn.style.color = "blue";
    }
}