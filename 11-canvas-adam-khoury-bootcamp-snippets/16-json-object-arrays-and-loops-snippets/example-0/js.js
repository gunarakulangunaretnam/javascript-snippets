window.addEventListener("load", function (event) {

    initCanvas();
})

function initCanvas() {

    var ctx = document.getElementById("can1").getContext("2d");
    var buildings = [

        { "id": "house", "x": 100, "y": 100, "w": 50, "h": 50, "bg": "blue" },
         { "id": "grocery", "x": 200, "y": 100, "w": 50, "h": 50, "bg": "red" },
          { "id": "house", "x": 300, "y": 100, "w": 50, "h": 50, "bg": "green" }


    ];
    
    for (i = 0; i < buildings.length; i++) {

        var b = buildings[i];//This line of code gets the data form the JSON when the loop runs.When the first time runs b gets the house data second time grocery data.

        ctx.fillStyle = b.bg;
        ctx.fillRect(b.x, b.y, b.w, b.h);
        
    }

}