window.addEventListener("load", function (event) {

    initCanvas();
})

function initCanvas() {

    var ctx = document.getElementById("can1").getContext("2d");

    ctx.canvas.addEventListener("mousemove", function (event) {

        var mouseX = event.clientX - ctx.canvas.offsetLeft;//By subtracting the offsetLeft we can get right value.
        var mouseY = event.clientY - ctx.canvas.offsetTop;//By subtracting the offsetTop we can get right value.
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;



    });

    ctx.canvas.addEventListener("click", function (event) {

        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;

        ctx.fillStyle = "red";
        ctx.fillRect(mouseX - 18, mouseY - 18, 50, 50);//Why i / by 15 mouseX and mouseY to get the deth center.

    });

}