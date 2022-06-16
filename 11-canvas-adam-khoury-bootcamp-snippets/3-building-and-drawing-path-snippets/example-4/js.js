window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.arc(150, 150, 100, 0, Math.PI , false);//Math.PI is the 50% cricle and is false is clockwise
    ctx.stroke()
    

}