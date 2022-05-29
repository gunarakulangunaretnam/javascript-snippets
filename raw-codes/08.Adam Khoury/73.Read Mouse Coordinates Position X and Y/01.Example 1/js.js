window.addEventListener("mousemove", readMouseMove);

function readMouseMove(event) {


    var resualtX = document.getElementById("result_x");
    var resualtY = document.getElementById("result_y");

    resualtX.innerHTML = event.clientX;
    resualtY.innerHTML = event.clientY;


}