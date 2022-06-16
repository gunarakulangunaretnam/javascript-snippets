window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.arc(150, 150, 100, 0, Math.PI , true);//Math.PI is the 50% cricle true is counter-clockwise.
    ctx.stroke()
    

}