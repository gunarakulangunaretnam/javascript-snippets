window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.arc(150, 150, 100, 0, Math.PI * 2, false);//Math.PI * 2 is same as 6.28.
    ctx.stroke()
    

}