window.onload = function () {

    document.getElementById("btn").onclick = function () { mainFun(ani1, ani2, ani3) };

}



function mainFun(fun1,fun2,fun3) {

    var boxElement = document.getElementById("box");
    var position = 0;
    var setTimer = setInterval(animationFunction, 5);

    function animationFunction() {

        if (position == 450) {

            clearInterval(setTimer);
            fun1(fun2, fun3);


        } else {

            position++;
            boxElement.style.left = position + "px";
            boxElement.style.transform = "rotate(" + position + "deg)";


        }
    }
  
   
}

function ani1(fun2, fun3) {

    var box = document.getElementById("box");
    var startingPosition = 0;
    var timerSystem = setInterval(aniSystem, 5);

    function aniSystem() {

        if (startingPosition == 270) {

            clearInterval(timerSystem);
            fun2(fun3);

        } else {
            startingPosition++;
            box.style.top = startingPosition + "px";
            box.style.transform = "rotate(" + -startingPosition + "deg)";

        }

    }

  
}

function ani2(fun3) {
   
    var ele = document.getElementById("box");
    var pos = 450
    var timer = setInterval(frame, 5);

    function frame() {

        if (pos == 0) {

            clearInterval(timer);
            fun3();

        } else {

            pos--;
            ele.style.left = pos + "px";
            ele.style.transform = "rotate(" + pos + "deg)";


        }
    }
 
}

function ani3() {
  
    var element = document.getElementById("box");
    var start = 270;
    var time = setInterval(fun, 5);

    function fun() {

        if (start == 0) {

            clearInterval(time);

        } else {
            start--;
            element.style.top = start + "px";
            element.style.transform = "rotate(" + start + "deg)";

        }
    }
    
    
   
}

