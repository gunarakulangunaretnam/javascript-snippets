window.onload = function () {

    document.getElementById("btn").onclick = animationFunction0;
}

function animationFunction0() {

    var ele = document.getElementById("box");
    var pos = 0;
    var timer = setInterval(frame, 5);

    function frame() {

        if (pos == 500) {

            clearInterval(timer);
            animationFunction1();
        } else {

            pos += 2
            ele.style.left = pos + "px";
            ele.style.transition = "background-color 1s, transform 2s";
            ele.style.backgroundColor = "green";
            ele.style.transform = "rotate(" + 90 + "deg)";
            }
    }

}

function animationFunction1() {

    var ele = document.getElementById("box");
    var start = 0;
    var time = setInterval(frame, 5);

    function frame() {

        if (start == 300) {

            clearInterval(time);
            animationFunction2();
          
        } else {
            start++;
            ele.style.top = start + "px";
            ele.style.transition = "background-color .5s, transform 2s";
            ele.style.backgroundColor = "blue";
            ele.style.transform = "rotate(" + -90 + "deg)";
        }
    }
}

function animationFunction2() {

    var box = document.getElementById("box");
    var pos = 500;
    var timing = setInterval(frame, 5);

    function frame() {

        if (pos == 0) {

            clearInterval(timing);
            animationFunction3();

        } else {

            pos -= 5;
            box.style.left = pos + "px";
            box.style.transition = "background-color .5s, transform 2s";
            box.style.backgroundColor = "yellow";
            box.style.transform = "rotate(" + -90 + "deg)";

        }
    }
}

 
  function animationFunction3() {

    var boxElement = document.getElementById("box");
    var startingPoint = 300;
  var timer=  setInterval(function () {

        if (startingPoint == 0) {

            clearInterval(timer);

        } else {

            startingPoint--;
            boxElement.style.top = startingPoint + "px";
            box.style.transition = "background-color .5s, transform 2s";
            box.style.backgroundColor = "darkred";
            box.style.transform = "rotate(" + 90 + "deg)";
        }
    }, 5)
}
