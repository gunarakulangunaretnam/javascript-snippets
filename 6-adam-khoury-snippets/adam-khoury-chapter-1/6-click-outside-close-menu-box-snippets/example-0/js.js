window.onload = function () {
   
    document.getElementById("open").onclick = boxFun;
    


}
var box = document.getElementById("box");

function boxFun() {

  
    box.style.display="block"

}


window.addEventListener("mouseup", function (event) {

    if (event.target != box && event.target.parentNode!=box) {


        box.style.display = 'none';
    }
})



/*Notes

*We must use mouseup for window.addEventListener becasue the event will apply to the window object.
* if we add onclick it wont work.

*/