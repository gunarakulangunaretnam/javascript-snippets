var can1 = document.getElementById("can1");
var ctx = can1.getContext("2d");
ctx.strokeRect(50, 50, 100, 100);
ctx.beginPath();
ctx.moveTo(75, 75);
ctx.lineTo(125, 125);
ctx.lineTo(125, 75);
ctx.fill()