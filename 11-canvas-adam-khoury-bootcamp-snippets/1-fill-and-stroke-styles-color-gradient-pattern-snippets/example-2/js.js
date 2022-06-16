window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    //var g1 = ctx.createLinearGradient(x0, y0, x1, y1);
    var g1 = ctx.createLinearGradient(50, 50, 150, 0);//if we change the last value like this (50, 50, 0, 150)  it will be top to bottom.like this
    g1.addColorStop(0, "magenta");//0 and 1 is the starting and ending position.
    g1.addColorStop(0.5, "yellow");//0.5 is middle position.and also we can give like 0.6,0.7,0.3;
    g1.addColorStop(1, "black");
    ctx.fillStyle = g1;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.strokeRect(50, 50, 150, 150);
    ctx.fillRect(50, 50, 150, 150);

}