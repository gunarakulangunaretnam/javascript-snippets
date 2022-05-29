window.onload = function () {

    var b1 = document.getElementById("b1").onclick = function () { cat1() };
    var b2 = document.getElementById("b2").onclick = function () { cat2() };
    var b3 = document.getElementById("b3").onclick = function () { cat3() };
    var b4 = document.getElementById("b4").onclick = function () { cat4() };
    var disBoxBtn = document.getElementById("disBox").onclick = function () { disBox() };

}

var cats = {

    cat1: {

        name: "Cat 1",
        point:0

    },

    cat2: {
        
        name: "Cat 2",
        point:0

    },

    cat3: {

        name: "Cat 3",
        point: 0

    },

    cat4: {

        name: "Cat 4",
        point:0
    }

}


var nameDis = document.getElementById("name");
var pointDis = document.getElementById("point");

function cat1() {

    document.getElementById("disBox").innerHTML = "<img id='i1' src='img1.jpg' />";
    nameDis.innerHTML = cats.cat1.name;
    pointDis.innerHTML = cats.cat1.point;

}


function cat2() {

    document.getElementById("disBox").innerHTML = "<img id='i2' src='img2.jpg' />";

    nameDis.innerHTML = cats.cat2.name;
    pointDis.innerHTML = cats.cat2.point;

}


function cat3() {

    document.getElementById("disBox").innerHTML = "<img id='i3' src='img3.jpg' />";

    nameDis.innerHTML = cats.cat3.name;
    pointDis.innerHTML = cats.cat3.point;

}


function cat4() {

    document.getElementById("disBox").innerHTML = "<img id='i4' src='img4.jpg' />";

    nameDis.innerHTML = cats.cat4.name;
    pointDis.innerHTML = cats.cat4.point;


}


function disBox() {
   


  
    if (document.getElementById("disBox").children[0].id == "i1") {

        
        pointDis.innerHTML = cats.cat1.point++;



    } else if (document.getElementById("disBox").children[0].id == "i2") {

        pointDis.innerHTML = cats.cat2.point++;


    } else if(document.getElementById("disBox").children[0].id == "i3"){
    
      
        pointDis.innerHTML = cats.cat3.point++;


    } else if (document.getElementById("disBox").children[0].id == "i4") {

        pointDis.innerHTML = cats.cat4.point++;

        
    }

   
   
}