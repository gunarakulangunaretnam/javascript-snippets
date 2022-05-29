window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.beginPath()//It spcifies that we are begining a new path.
    ctx.moveTo(150, 150);//These are x and y coordiates.
    ctx.lineWidth = 20;
    ctx.lineCap = "round";//We can also use butt,round,square.It spcifies the end.
    ctx.lineJoin = "round";//We can alose use bevel,round,miter.It spcifies the joins.
    ctx.lineTo(250, 250);
    ctx.lineTo(350,40)
    ctx.stroke();
    

}