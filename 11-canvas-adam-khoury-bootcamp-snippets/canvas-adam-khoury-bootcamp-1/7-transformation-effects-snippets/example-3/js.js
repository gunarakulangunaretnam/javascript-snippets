window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "yellow";
   ctx.fillRect(50, 50, 100, 100);
    //transform(xScale,ySkew,xSkew,yScale,xTrans,yTrans).
    //Default transform is matrix is (1,0,0,1,0,0).

   ctx.transform(0.5, 0, 0, 0.5, 0, 0);
   ctx.fillRect(500, 50, 100, 100);
   ctx.fillRect(350, 50, 100, 100);
 
     
}

