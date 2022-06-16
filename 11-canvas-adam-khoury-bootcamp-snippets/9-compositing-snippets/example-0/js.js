window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "magenta";
    ctx.fillRect(20, 20, 100, 100);
    ctx.fillStyle = "blue";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(40, 40, 100, 100);
    
}


