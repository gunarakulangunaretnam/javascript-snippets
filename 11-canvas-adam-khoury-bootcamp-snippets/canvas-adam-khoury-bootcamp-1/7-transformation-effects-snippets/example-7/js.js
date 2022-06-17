window.onload = draw;

function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    //transform(xScale,ySkew,xSkew,yScale,xTrans,yTrans).
    //Default transform is matrix is (1,0,0,1,0,0).
    ctx.fillStyle = "yellow";

    ctx.setTransform(1, 0, 0.5, 1, 0, 0)
    ctx.fillRect(20, 20, 100, 100);
    ctx.setTransform(1, 0.5, 0, 1, 0, 0)
    ctx.fillRect(100, 80, 100, 100);
}

//by using setTransform method we can set the transform effects.but if you only put the transfrom effect it will set the effects for all canvases.

