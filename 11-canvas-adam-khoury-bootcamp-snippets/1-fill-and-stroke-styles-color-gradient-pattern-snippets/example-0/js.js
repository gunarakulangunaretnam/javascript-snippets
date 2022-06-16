window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    //ctx.fillStyle=Color names | Hex | rgba() | gradient | pattren.
    ctx.fillStyle="rgba(0,200,0,0.4)"//rgba a is stand for alpha.it means the opacity.
    ctx.fillRect(50, 50, 150, 150);
}