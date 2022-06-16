window.onload = draw;




function draw() {

    var ctx = document.getElementById("can1").getContext("2d");
    ctx.fillStyle = "magenta";
    ctx.fillRect(20, 20, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(40, 40, 100, 100);
    var src = ctx.getImageData(20, 20, 50, 50)//(x,y,w,h).This line of code get the image form the canvas.
    var copy = ctx.createImageData(src.width, src.height)//we can also put 50 50 or we can put ony src it will automatically get the width and height.

    for (var i = 0; i < copy.data.length; i++) {//data returns the rgb value 0 to 255.

        copy.data[i] = src.data[i];//It takes the src data rgb and put it in the copy data.

    }
    ctx.putImageData(copy, 250, 20);

}
//This is another way to get Image.

