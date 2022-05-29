window.onload = function () {

    document.getElementById("colorList").onchange = colorChanger;
}

var colors = [];
colors[0] = "pic1.gif";
colors[1] = "pic2.gif";
colors[2] = "pic3.gif";
colors[3] = "pic4.gif";
colors[4] = "pic5.gif";
colors[5] = "pic6.gif";
colors[6] = "pic7.gif";


var imgsBoxes = document.getElementById("imgBox");
var colorList=document.getElementById("colorList");


function colorChanger() {

    if (colorList.value == "color1") {

        imgsBoxes.src = colors[0];
        
    } else if (colorList.value == "color2") {

        imgsBoxes.src = colors[1];

    } else if (colorList.value == "color3") {

        imgsBoxes.src = colors[2];

    } else if (colorList.value == "color4") {

        imgsBoxes.src = colors[3];

    } else if (colorList.value == "color5") {

        imgsBoxes.src = colors[4];

    } else if (colorList.value == "color6") {

        imgsBoxes.src = colors[5];

    } else if (colorList.value == "color7") {

        imgsBoxes.src = colors[6];
    }


}