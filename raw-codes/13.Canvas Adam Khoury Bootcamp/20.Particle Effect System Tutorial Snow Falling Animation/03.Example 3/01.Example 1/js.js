window.addEventListener("load", function () {

    initCanvas();

});


var img = new Image();
img.src = "im.jpg";


function initCanvas() {

    var ctx = document.getElementById('can1').getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var flakes = [];
    
    function addFlake() {

        var x = Math.floor(Math.random() * cW) + 1;
        var y = 0;
        var s = Math.floor(Math.random() * 3) + 1;//It has three layers in depth.
        flakes.push({ "x": x, "y": y, "s": s });

    }

    function snow() {
        
        addFlake();
        addFlake();
       
     
        for (var i = 0; i < flakes.length; i++) {

            ctx.fillStyle = "rgba(255,255,255,.75)";//.75 is the alpha.
            ctx.beginPath();
            ctx.arc(flakes[i].x, flakes[i].y += flakes[i].s * .5, flakes[i].s * .5, 0, Math.PI * 2, false);
            ctx.fill();//fill it with the above color.

            if (flakes[i].y > cH) {//if the snow hits the bottom just remove it.

                flakes.splice(i, 1);
            }

            document.getElementById("status").innerHTML = flakes.length;
        }
    }


    function animate() {

        ctx.save();//We use save() and restore() methods when we use rotate() or any other transform methods. 

        ctx.clearRect(0, 0, cW, cH);//This is important to make the right animation.
        ctx.drawImage(img, 0, 0);
        ctx.rotate(-.4);
        snow()

        ctx.restore();//We use save() and restore() methods when we use rotate() or any other transform methods. 
    }

    var animateInterval = setInterval(animate, 30);

}
//Do you want to thick the snow just call the addFlake() function in the snow() function a lot of times.
//Do you want to show form differnt diraction use the rotate() method.
