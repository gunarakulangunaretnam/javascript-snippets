window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.beginPath()//It spcifies that we are begining a new path.
    ctx.moveTo(150, 150);//These are x and y coordiates.
    ctx.lineTo(250, 250);
    ctx.lineTo(350,40)
    ctx.stroke();
    ctx.fill()//we use the fill method to fill it.

}