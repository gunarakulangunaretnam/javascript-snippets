window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "magenta";
    ctx.fillRect(20, 20, 100, 100);//It is used to drow a rectangle.
    ctx.strokeRect(20, 20, 100, 100);//It is used to drow a border rectangle.
    ctx.fillRect(200, 200, 50, 50);//It is used to drow a rectangle.
    ctx.strokeRect(200, 200, 50, 50);//It is used to drow a border rectangle.
    ctx.clearRect(0, 0, 100, 100);//The clearRect is used to erase the canvas.
}