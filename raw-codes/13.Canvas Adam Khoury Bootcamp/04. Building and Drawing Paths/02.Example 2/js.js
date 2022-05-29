window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.arc(150, 150, 100, 0, 6.28, false);//The 3.28 is the cricle value we can also use like this Math.PI *2 insted of 6.28.false is clockwise and true is counter-clockwise.
    ctx.stroke()
    

}