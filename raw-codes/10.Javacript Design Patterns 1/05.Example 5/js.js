window.onload = function () {

    var btns = document.getElementsByTagName("button");

    var funArrs = [fun1, fun2,fun3,fun4];

    for (i = 0; i < btns.length; i++) {

        btns[i].onclick = funArrs[i];

    }
  

}

var imgsDetails = {

    img1: {

        name: "Joker 1",
        points:0
    },

    img2: {
        name: "Joker 2",
        points:0

    },

    img3: {

        name: "Joker 3",
        points:0
    },

    img4: {

        name: "Joker 4",
        points:0

    }

}

function fun1() {

    document.getElementById("disBox").innerHTML = "<img id='i1' src='img1.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img1.name;
    document.getElementById("point").innerHTML = imgsDetails.img1.points;
    

}

function fun2() {

    document.getElementById("disBox").innerHTML = "<img id='i2' src='img2.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img2.name;
    document.getElementById("point").innerHTML = imgsDetails.img2.points;

}

function fun3() {

    document.getElementById("disBox").innerHTML = "<img id='i3' src='img3.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img3.name;
    document.getElementById("point").innerHTML = imgsDetails.img3.points;

}

function fun4() {

    document.getElementById("disBox").innerHTML = "<img id='i4' src='img4.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img4.name;
    document.getElementById("point").innerHTML = imgsDetails.img4.points;

}

document.getElementById("disBox").onclick = disBox;


function disBox() {

    if (document.getElementById("disBox").children[0].id == "i1") {

        document.getElementById("point").innerHTML = imgsDetails.img1.points++;

    } else if (document.getElementById("disBox").children[0].id == "i2") {

        document.getElementById("point").innerHTML = imgsDetails.img2.points = imgsDetails.img2.points + 1;


    } else if (document.getElementById("disBox").children[0].id == 'i3') {

        document.getElementById("point").innerHTML = imgsDetails.img3.points += 1;

    } else if (document.getElementById("disBox").children[0].id == 'i4') {

        document.getElementById("point").innerHTML = imgsDetails.img4.points++;
    }
}

