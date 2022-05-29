var img = new Image();

img.src = "im.jpg";

var can = document.getElementById("can1");
var ctx = can.getContext("2d");
ctx.drawImage(img, 0, 0, can.width, can.height);