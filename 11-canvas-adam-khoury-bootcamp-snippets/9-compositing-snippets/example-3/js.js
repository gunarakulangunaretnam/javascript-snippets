window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");

    //globalAlpha 0.0 to 1.0.
    //globalCompositeOperation= source-atop || source-in || source-out || source-over(default) || destination-atop || destination-in || destination-out
    //destination-over || lighter || copy || xor.

    
    ctx.globalAlpha = 1;
    ctx.fillStyle = "magenta";
    ctx.fillRect(20, 20, 100, 100);

    ctx.fillStyle = "blue";
    ctx.fillRect(40, 40, 100, 100);
    

 
  
    ctx.fillStyle = "magenta";
    ctx.fillRect(250, 20, 100, 100);

    ctx.globalCompositeOperation = "source-in";
 
    ctx.fillStyle = "blue";
    ctx.fillRect(270, 40, 100, 100);
    
}


//globalCompositeOperation is use to make a lot of effects.But make sure to put it between two or more canvases.

