window.onload = function () {

    
    document.getElementById("btn1").onclick = box1Fun;
    document.getElementById("btn2").onclick = box2Fun;
    document.getElementById("btn3").onclick = box3Fun;

   
    
}

var boxes = document.getElementsByClassName("boxes");

function box1Fun() {

    boxes[0].style.display = 'block';

}

function box2Fun() {

    boxes[1].style.display = "block";
}

function box3Fun() {

    boxes[2].style.display = 'block';

}

var boxesArr=['box1','box2','box3']

window.addEventListener("mouseup", function (event) {

    for (g = 0; g < boxesArr.length; g++) {

        var box = document.getElementById(boxesArr[g]);

        if (event.target != box &&event.target.parentNode!=box) {

            box.style.display = "none";
        }

    }

})


/*Notes

*We must use mouseup for window.addEventListener becasue the event will apply to the window object.
* if we add onclick it wont work.


*/