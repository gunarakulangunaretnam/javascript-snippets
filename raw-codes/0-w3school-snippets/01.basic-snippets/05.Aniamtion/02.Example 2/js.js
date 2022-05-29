function animate() {

    var ele = document.getElementById("box");
    var start = 0;

    var timerSet = setInterval(moverFunction, 10);

    function moverFunction() {

        if (start == 500) {

            clearInterval(timerSet);
			
        } else {

            start++;
            ele.style.position = "relative";
            ele.style.left = start + "px";
        }

    }



}

animate();