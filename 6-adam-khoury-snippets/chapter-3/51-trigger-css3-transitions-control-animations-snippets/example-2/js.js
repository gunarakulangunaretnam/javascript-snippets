function fadeOut(ele) {

    var element = document.getElementById(ele);
    element.style.transition = "opacity 1s linear 0s";
    element.style.opacity = 0;

}

function fadeIn(ele) {

    var element = document.getElementById(ele);
    element.style.transform = "opacity 1s linear 0s";
    element.style.opacity = 1;

}




/*

*By using the css3 properties in JavaScript We can make many transition effects and aniamtion effects.
*We don't have to use any third party of library.
*We can also change the user interaction intead of onclick we can use onmouseover,onmouseout and any events.
*But we have to use all the browser pre-fixes such as webkitTransition,MozTranstion and all the pre-fixes.

*/


