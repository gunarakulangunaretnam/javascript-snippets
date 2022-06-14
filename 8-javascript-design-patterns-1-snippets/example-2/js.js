window.onload = function () {

    imgs = document.getElementsByClassName('img');

    imgs[0].addEventListener("click", img1Fun);
    imgs[1].addEventListener("click", img2Fun);
    imgs[2].addEventListener("click", img3Fun);
    imgs[3].addEventListener("click", img4Fun);
}

var namesLists = ["Joker 1", "Joker 2", "Joker 3", "Joker 4"];
var imgsVars = [img1 = 0, img2 = 0, img3 = 0, img4 = 0];



function img1Fun() {


    document.getElementById("mainBox").innerHTML="<img src='img1.jpg'>";
   var va= document.getElementById("status").innerHTML = imgsVars[0]++;
   document.getElementById("j1").innerHTML ="Joker One "+ va;

}

function img2Fun() {

    document.getElementById("mainBox").innerHTML = "<img src='img2.jpg'>";
    var va = document.getElementById("status").innerHTML = imgsVars[1]++;
 document.getElementById("j2").innerHTML = "Joker two " + va;

}

function img3Fun() {

    document.getElementById("mainBox").innerHTML = "<img src='img3.jpg'>";
    var va = document.getElementById("status").innerHTML = imgsVars[2]++;
   document.getElementById("j3").innerHTML = "Joker three " + va;
}

function img4Fun() {

    document.getElementById("mainBox").innerHTML = "<img src='img4.jpg'>";
    var va = document.getElementById("status").innerHTML = imgsVars[3]++;
   document.getElementById("j4").innerHTML = "Joker four " + va;


}

