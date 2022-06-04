window.onload = function () {



    document.getElementById("btn1").onclick = makerOfBtn;

}

function makerOfBtn() {


    var newBtn = document.getElementById("btn2");
    newBtn.value = "I can work";
    newBtn.style.color = "green";
    newBtn.onclick = function () {

        var newBtn1 = document.getElementById("btn3").onclick = function () { alert("Now I am working fine") };
       var btn= document.getElementById("btn3");
       btn.value = "I can also work";
       btn.style.color = "blue";

    }

}
