window.addEventListener("load", function (event) {

    initCanvas();

});

var bg = new Image();
bg.src = "stars.jpg";

function initCanvas() {

    var ctx = document.getElementById("can1").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    
    function Background() {
        
        this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;

        this.render = function () {

            ctx.drawImage(bg, this.x-=3, 0);//If we put x++ it will animate form right to left.or you can speed up by giving higher numbers like x-=3,x+=3.

            if (this.x <= -499) {

                this.x = 0;
            } 
        }

    }

    var background = new Background();



    function animate() {

        ctx.save();

        background.render();

        ctx.fillStyle = "red";
        ctx.fillRect(50, 50, 25, 25);

        ctx.restore();

    }

    var animateInterval = setInterval(animate, 30);

}
