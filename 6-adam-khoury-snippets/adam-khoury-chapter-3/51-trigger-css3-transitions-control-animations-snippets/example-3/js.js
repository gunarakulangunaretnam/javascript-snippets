function slideClose(ele) {

    var element = document.getElementById(ele);
    element.style.transition = "height 1s linear 0s";
    element.style.height = '0px';
    element.style.overflow = "hidden";
   

}

function slideOpen(ele) {

    var element = document.getElementById(ele);
    element.style.transition = "height 1s linear 0s";
    element.style.height = '200px';
    
}



/*

*By using the css3 properties in JavaScript We can make many transition effects and aniamtion effects.
*We don't have to use any third party of library.
*We can also change the user interaction intead of onclick we can use onmouseover,onmouseout and any events.
*But we have to use all the browser pre-fixes such as webkitTransition,MozTranstion and all the pre-fixes.

*/


