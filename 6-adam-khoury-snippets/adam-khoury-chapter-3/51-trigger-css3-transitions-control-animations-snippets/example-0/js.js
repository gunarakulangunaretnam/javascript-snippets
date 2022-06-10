function changeBg(ele,clr) {

    var elemt = document.getElementById(ele);
    elemt.style.transition = "background 1s linear 0s";//'background' is the transition property, '1s' is the duration of the animtion, 'linear' is the method of animation.
    elemt.style.backgroundColor = clr;                 //We can have ease-in or ease-out or any other methods instead of linear,'0s' delay time but i put it to 0.
    

}

/*

*By using the css3 properties in JavaScript We can make many transition effects and aniamtion effects.
*We don't have to use any third party of library.
*We can also change the user interaction intead of onclick we can use onmouseover,onmouseout and any events.
*But we have to use all the browser pre-fixes such as webkitTransition,MozTranstion and all the pre-fixes.


*/


