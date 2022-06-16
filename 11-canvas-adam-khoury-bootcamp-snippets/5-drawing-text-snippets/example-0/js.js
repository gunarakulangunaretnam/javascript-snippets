window.onload = draw;



function draw() {

  
    var ctx = document.getElementById("can1").getContext("2d");
    //fillText(text,x,y,maxWidth) maxWidth is optional.
    //storkeText(text,x,y,maxWidth) maxWidth is optional. but it is a storke text.
    ctx.fillStyle = "orange";
    ctx.font = "italic bold 56px Arial sans-serif";//We can use 900 500 to bold. 
    ctx.textAlign = "start";//star,end,left,right,center .we can use one if these.
    ctx.textBaseline = "hanging";//top,middle,bottom,hanging,alphabetic,ideographic.
    ctx.fillText("Text on canvas", 50, 50);
    ctx.lineWidth = 3;
    ctx.strokeText("Text on canvas", 50, 50);
   
     
}