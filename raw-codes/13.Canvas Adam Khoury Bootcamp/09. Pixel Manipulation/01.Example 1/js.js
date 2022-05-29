window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "magenta";
    ctx.fillRect(20, 20, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(40, 40, 100, 100);
    var src = ctx.getImageData(20, 20, 50, 50)//(x,y,w,h).This line of code get the image form the canvas.
    ctx.putImageData(src, 280, 25);//The putImageData is use to paste the image.

}


