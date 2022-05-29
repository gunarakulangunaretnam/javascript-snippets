window.onload = function () {

    document.getElementById("run").onclick = function () { animation() };

}

function animation() {

    var ani = document.getElementById("animate");
    var pos = 0;
    var setTime = setInterval(frame, 5);

    function frame() {

        if (pos == 500) {

            clearInterval(setTime);
        } else {
            pos++;
            ani.style.left = pos + "px";
            ani.style.top = pos + "px";
        }

    }
}