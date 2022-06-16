window.addEventListener("load", function () {

    initCanas();

});


function initCanas() {

    var ctx = document.getElementById("can1").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var enemies = [

        { "id": "enemy1", x: 100, y: -20, w: 40, h: 20 },
        { "id": "enemy2", x: 225, y: -20, w: 40, h: 20 },
        { "id": "enemy3", x: 350, y: -20, w: 40, h: 20 },
        { "id": "enemy4", x: 100, y: -70, w: 40, h: 20 },
        { "id": "enemy5", x: 225, y: -70, w: 40, h: 20 },
        { "id": "enemy3", x: 350, y: -70, w: 40, h: 20 }

    ];

    function renderEnemies() {

        for (var i = 0; i < enemies.length; i++) {

            ctx.fillStyle = "blue";
            ctx.fillRect(enemies[i].x, enemies[i].y += .5, enemies[i].w, enemies[i].h);

        }
    }


    function Launcher() {

        this.y = 280, this.x = cW * .5 - 25, this.w = 50, this.h = 50, this.dir, this.bg = "orange", this.missiles = [];//cW * .5 - 25 to deth center.

        this.render = function () {


            if (this.dir == "left") {

                this.x -= 5;

            } else if (this.dir == "right") {

                this.x += 5;

            }
            ctx.fillStyle = this.bg;
            ctx.fillRect(this.x, this.y, this.w, this.h);

            for (var i = 0; i < this.missiles.length; i++) {

                var m = this.missiles[i];
                ctx.fillStyle = m.bg;
                ctx.fillRect(m.x, m.y -= 5, m.w, m.h);//m.y-=5 it moves upward.
                this.hitDetect(this.missiles[i], i);

                if (m.y <= 0) {//If a missile goes part the canvas boundries,remove it.


                    this.missiles.splice(i, 1);//Splice that missile out of the missile array.


                }


            }
        }

        if (enemies.length == 0) {

            clearInterval(animateInterval);//Stop the game.
            ctx.fillStyle = "#FC0";
            ctx.font = "italic bold 36px Arial,sans-serif";
            ctx.fillText = ('Leval complete', cW * .5 - 130, 50, 300);


        }


        this.hitDetect = function (m, mi) {

            for (var i = 0; i < enemies.length; i++) {

                var e = enemies[i];

                if (m.x + m.w >= e.x && m.x <= e.x + e.w && m.y >= e.y && m.y <= e.y + e.h) {


                    this.missiles.splice(this.missiles[mi], 1)//Remove that missiles
                    enemies.splice(i, 1)//Remove the enemy that the missile hit
                    document.getElementById("status").innerHTML = "You droped " + e.id;

                }
            }

        }

       

    }

    var launcher = new Launcher();


    function animate() {

        ctx.save();
        ctx.clearRect(0, 0, cW, cH);//If you don't put this code your program will be suck.

        renderEnemies()
        launcher.render();

        ctx.restore();
    }



    var animateInterval = setInterval(animate, 30);

    var left_btn = document.getElementById("btn_left");
    var right_btn = document.getElementById("btn_right");
    var fire_btn = document.getElementById("fire_btn");

    left_btn.addEventListener("mousedown", function () {

        launcher.dir = "left";


    });

    left_btn.addEventListener("mouseup", function () {

        launcher.dir = "";


    });

    right_btn.addEventListener("mousedown", function () {

        launcher.dir = "right";


    });

    right_btn.addEventListener("mouseup", function () {

        launcher.dir = "";


    });

    fire_btn.addEventListener("mousedown", function () {

        launcher.missiles.push({ "x": launcher.x + launcher.w * .5, "y": launcher.y, "w": 3, "h": 10, "bg": "red" });


    });
}
