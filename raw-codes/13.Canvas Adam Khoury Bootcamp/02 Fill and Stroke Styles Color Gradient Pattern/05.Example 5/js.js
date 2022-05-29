window.onload = draw;


var img = new Image();
img.src="im.png"

function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    var pa=ctx.createPattern(img, "repeat")//We can also use repeat-x and repeat-y.
    ctx.fillStyle = pa;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.strokeRect(50, 50, 150, 150);
    ctx.fillRect(50, 50, 150, 150);

}