window.onload = draw;


var img = new Image();
img.src = "img.jpg";

function draw() {

  
    var ctx = document.getElementById("can1").getContext("2d");
    ctx.drawImage(img, 100, 100, img.width, img.height, 20, 20, img.width, img.height);
    //We can clip images like this for further information research about it.

}