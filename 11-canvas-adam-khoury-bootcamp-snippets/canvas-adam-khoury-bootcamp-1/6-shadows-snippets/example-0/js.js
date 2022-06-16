window.onload = draw;




function draw() {

   var ctx = document.getElementById("can1").getContext("2d");
    //shadowColor=color | hex | rgba().a is alpha it means opacity.
    //shadowOffsetX=positive or nagative number.
    //shadowOffsetY=positive or nagative number.
    //shadowBlur=positive number.

   ctx.fillStyle = "yellow";
   ctx.shadowColor = 'rgba(200,0,0,1)';//200 is the Maximum value.  1 is the tranparent it means the opacity.
   ctx.shadowOffsetX = 5;//if you out -5 it will change the diraction.
   ctx.shadowOffsetY = 5;//if you out -5 it will change the diraction.
   ctx.shadowBlur = 3;
   ctx.fillRect(200, 50, 100, 100);
   

     
}

