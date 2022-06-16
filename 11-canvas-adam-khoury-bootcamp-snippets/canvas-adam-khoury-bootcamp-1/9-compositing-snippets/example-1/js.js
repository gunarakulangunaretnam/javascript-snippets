window.onload = draw;




function draw() {
	var ctx = document.getElementById("can1").getContext("2d");
	
    //globalAlpha=0.0 to 1.0.
	
	ctx.fillStyle = "magenta";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(20, 20, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(40, 40, 100, 100);
    
}


