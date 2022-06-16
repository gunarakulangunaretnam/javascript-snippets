window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.beginPath()//Resets the current default path.
    ctx.moveTo(50, 50)//creates a new subpath with the given point.
    ctx.lineTo(250, 50);//creates a new line along the current subpath.
    ctx.lineTo(250, 200);
    ctx.lineTo(50, 200);
    ctx.closePath();//We can also code like this ctx.lineTo(50,50).
    ctx.stroke();//We can also use the fill method.
    
    

}