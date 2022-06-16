
    var ctx = document.getElementById("can1").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;


    function progressSim() {


        diff=((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 10;
        ctx.fillStyle = "#09F";
        ctx.strokeStyle = "#09F";
        ctx.textAlign = "center";
        ctx.fillText(al + "%",38,38);
        ctx.beginPath();
        ctx.arc(35,35,30, start, diff / 10 + start, false)
        ctx.stroke();
        if (al >= 100) {

            clearInterval(Sim);
            
        }
        al++;

    }

    var Sim = setInterval(progressSim, 50);



