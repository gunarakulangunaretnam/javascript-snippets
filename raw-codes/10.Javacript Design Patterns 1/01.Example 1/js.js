window.onload = function () {

    document.getElementById("img1").addEventListener("click", imgClicker);
}


var nameLists = ["Joker 1"];
var img1 = 0;

function imgClicker() {

    document.getElementById("status").innerHTML = nameLists[0].fontcolor("red") + " " + img1++;
    
}