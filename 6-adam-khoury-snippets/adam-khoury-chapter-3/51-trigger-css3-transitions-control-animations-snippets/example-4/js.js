function slideIn(ele) {

    var element = document.getElementById(ele);
    element.style.transition = "left 1s linear 0s";
    element.style.left = "0px";

   

}

function slideOut(ele) {

    var element = document.getElementById(ele);
    element.style.transition = "left 1s linear 0s";
    element.style.left = '-400px';
    
}



/*

*By using the css3 properties in JavaScript We can make many transition effects and aniamtion effects.
*We don't have to use any third party of library.
*We can also change the user interaction intead of onclick we can use onmouseover,onmouseout and any events.
*But we have to use all the browser pre-fixes such as webkitTransition,MozTranstion and all the pre-fixes.

*/


