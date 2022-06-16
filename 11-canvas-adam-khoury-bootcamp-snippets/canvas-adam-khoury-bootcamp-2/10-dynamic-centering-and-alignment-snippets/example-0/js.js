window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    var rectW = 100;
    var rectH = 100;
    var rectX = (ctx.canvas.width / 2) - (rectW / 2);//If we don't want to group it just leave it.It will work fine without grouping.
    var rectY = (ctx.canvas.height * .5) - (rectH *.5);//*.5 is same as /2.
    ctx.fillStyle = "green";
    ctx.fillRect(rectX, rectY, rectW, rectH);
    
}




