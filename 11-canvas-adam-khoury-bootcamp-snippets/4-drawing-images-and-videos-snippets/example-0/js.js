window.onload = draw;


var img = new Image();
img.src = "img.jpg";

function draw() {

  
    var ctx = document.getElementById("can1").getContext("2d");
    ctx.drawImage(img,20, 20, 200, 200);

}