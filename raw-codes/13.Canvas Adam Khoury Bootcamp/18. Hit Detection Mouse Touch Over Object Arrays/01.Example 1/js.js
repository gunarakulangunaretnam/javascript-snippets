window.addEventListener("load", function (event) {

    initCanvas();
})

function initCanvas() {

    var ctx = document.getElementById("can1").getContext("2d");

    ctx.canvas.addEventListener("mousedown", function (event) {

        var mX = event.clientX - ctx.canvas.offsetLeft;
        var mY = event.clientY - ctx.canvas.offsetTop;

      

        for (var i = 0; i < buildings.length; i++) {

            var b = buildings[i];


            if (mX >= b.x && mY < b.x + b.w && mY >= b.y && mY < b.y + b.h) {

                document.getElementById("status").innerHTML = "You touched " + b.id;
            }
            
        }


    });

    var buildings = [

        { "id": "house", "x": 100, "y": 100, "w": 50, "h": 50, "bg": "blue" },
         { "id": "grocery", "x": 200, "y": 100, "w": 50, "h": 50, "bg": "red" },
          { "id": "car", "x": 300, "y": 100, "w": 50, "h": 50, "bg": "green" }


    ];
    
    for (i = 0; i < buildings.length; i++) {

        var b = buildings[i];//This line of code gets the data form the JSON when the loop runs.When the first time runs b gets the house data second time grocery data.

        ctx.fillStyle = b.bg;
        ctx.fillRect(b.x, b.y, b.w, b.h);
        
    }

}

//touchstart
//touchend
//touchcancel
//touchleave
//touchmove
