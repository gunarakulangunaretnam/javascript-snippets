window.addEventListener("load", function (event) {

    initCanvas();
})

function initCanvas() {

    var ctx = document.getElementById("can1").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
   


    function rectObj() {

        this.x = 0, this.y = 0; this.w = 0;

        this.render = function (ctx,rx,ry,rw,rh,clr) {//ctx is the canvas object.

            ctx.fillStyle = clr;
            ctx.fillRect(rx, ry, rw, rh);

        }

    }


    var rect1 = new rectObj();
    var rect2 = new rectObj();
    rect1.w = 50;
    rect2.w = 50;
    rect2.y = 100;



    function animate() {

        ctx.save();//save and restore are important Our code comes between them.

        ctx.clearRect(0, 0, cW, cH);//If you don't clear the rectangle every time when it runs.It will mass up your code.

       rect1.render(ctx, rect1.x, rect1.y, 50, 50, "red");
       rect2.render(ctx,rect2.x,rect2.y,50,50,"blue")
       
       rect1.y++;
       rect2.x++;
        ctx.restore();//save and restore are important Our code comes between them.
    }

    var animateInterval = setInterval(animate, 30);

    ctx.canvas.addEventListener("click", function (event) {

        clearInterval(animateInterval);
    });

}