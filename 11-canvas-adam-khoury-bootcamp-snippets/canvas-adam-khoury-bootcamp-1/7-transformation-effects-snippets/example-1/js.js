window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "yellow";
   ctx.fillRect(50, 50, 100, 100);
   ctx.rotate(0.1);//angle
   ctx.fillRect(200, 50, 100, 100);
   ctx.fillRect(350, 50, 100, 100);
 
     
}

