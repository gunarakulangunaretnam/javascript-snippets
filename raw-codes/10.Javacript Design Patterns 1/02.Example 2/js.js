window.onload = function () {

    document.getElementById("img1").addEventListener("click", imgClicker1);
    document.getElementById("img2").addEventListener("click",imgClicker2)
}


var nameLists = ["Joker 1","Joker 2"];
var img1 = 0;
var img2 = 0;

function imgClicker1() {

    document.getElementById("status").innerHTML = nameLists[0].fontcolor("red") + " " + img1++;
    
}


function imgClicker2() {

    document.getElementById("status").innerHTML = nameLists[1].fontcolor("red") + " " + img2++;

}
