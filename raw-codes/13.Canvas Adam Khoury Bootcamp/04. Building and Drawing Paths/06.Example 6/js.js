window.onload = draw;


function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.arc(150, 150, 100, 0, 4.2 , false);//By changeing the cricle value we can make 75% 88% and many cricles.
    ctx.stroke()
   

}