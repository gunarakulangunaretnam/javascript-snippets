window.onload = draw;


var img = new Image();
img.src = "img.jpg";

function draw() {

  
    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "red";
    ctx.font = "60px Arial";
    ctx.fillText("Text On canvas", 50, 50, 150);
    ctx.strokeText("Text On canvas", 50, 50, 150);
     
}

