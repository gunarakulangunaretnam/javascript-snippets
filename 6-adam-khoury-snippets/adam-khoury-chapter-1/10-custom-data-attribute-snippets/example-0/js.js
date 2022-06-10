var rocketTop, rocketLeft, rocketSpeed, rocketImgs

window.onload = function () {

    rocketImgs = document.querySelectorAll('div.rokets');

    for (a = 0; a < rocketImgs.length; a++) {

        rocketTop = rocketImgs[a].dataset.top;
        rocketLeft = rocketImgs[a].dataset.left;
        rocketSpeed = rocketImgs[a].dataset.speed;
        rocketImgs[a].style.top = rocketTop + "px";
        rocketImgs[a].style.webkitTransitionDuration = rocketSpeed + "s";
        rocketImgs[a].style.left = rocketLeft+"px";


        

    }
}



/*Notes

*We can use data attribute for many differnt programs.
 We do not have to use it only for activating rokets.This is an example.
 

*/
