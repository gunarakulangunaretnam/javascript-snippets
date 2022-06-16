window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    //ctx.fillStyle=Color names | Hex | rgba() | gradient | pattren.
    ctx.fillStyle = "rgba(0,200,0,0.5)"//rgba a is stand for alpha.it means the opacity.
    ctx.strokeStyle = "red";//strokeStyle is use to give a color style for strokeRect method.
    ctx.lineWidth = 10;//lineWidth is use to give the width of the strokeRect.
    ctx.strokeRect(50, 50, 150, 150);
    ctx.fillRect(50, 50, 150, 150);

}