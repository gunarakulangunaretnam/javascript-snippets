window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.moveTo(50,50);
    ctx.lineTo(300, 50);
    //ctx.arcTo(x1,y1,x2,y2,radius) x1 and y1 means where it is beign.x2 and y2 means where it is end. 
    ctx.arcTo(350, 50, 350, 100, 50);
    ctx.lineTo(350, 200);
    ctx.stroke();
  // There are also some methods like this ctx.bezierCurveTo() and ctx.quadraticCurveTo() methods

}