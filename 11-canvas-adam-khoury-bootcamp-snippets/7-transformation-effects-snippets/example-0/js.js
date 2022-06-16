window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "yellow";
   ctx.fillRect(50, 50, 100, 100);
   ctx.scale(0.5, 0.5);//Default scale is 1,1 that is x and y.
   ctx.fillRect(500, 50, 100, 100);
 
     
}

