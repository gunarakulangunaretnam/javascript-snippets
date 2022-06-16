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


    function Player() {

        this.x = 0, this.y = 0, this.w = 50, this.h = 50;

        this.render = function () {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.w, this.h);

        }


    }

    var background = new Background();
    var player1 = new Player();

    player1.y = 100;
    player1.x = 100;



    function animate() {

        ctx.save();

        background.render();
        
        player1.render();

        ctx.restore();

    }

    var animateInterval = setInterval(animate, 30);

    document.addEventListener("keydown", function (event) {

        var key_code = String.fromCharCode(event.keyCode);
        var speed=3;
      
        if (key_code == "W") {

            player1.y -= speed;

        } else if (key_code == "S") {

            player1.y += speed;

        } else if (key_code == "A") {

            player1.x -= speed;

        } else if(key_code=="D") {

            player1.x += speed;
        }

        
       

    });
}
