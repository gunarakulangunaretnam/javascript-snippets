window.addEventListener("load", function (event) {

    initCanvas();
})

function initCanvas() {

    var ctx = document.getElementById("can1").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var y = 0, x = 0;

    function animate() {

        ctx.save();//save and restore are important Our code comes between them.

        ctx.clearRect(0, 0, cW, cH);//If you don't clear the rectangle every time when it runs.It will mass up your code.

        ctx.fillStyle = "magenta";
        ctx.fillRect(0, y, 100, 100);
       
        y++

        ctx.fillStyle = "blue";
        ctx.fillRect(x, 0, 100,100);
        x++;

        ctx.restore();//save and restore are important Our code comes between them.
    }

    var animateInterval = setInterval(animate, 30);

    ctx.canvas.addEventListener("click", function (event) {

        clearInterval(animateInterval);
    });

}