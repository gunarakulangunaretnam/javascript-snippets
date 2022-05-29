var scrollY = 0;
var distance = 40;
var speed = 25;

function autoScrollTo(ele) {


    var currentY = window.pageYOffset;//pageYOffset returns the exact number of scroll value.
    var targetY = document.getElementById(ele).offsetTop//offsetTop means how far is form it's parent element.But in our case the parent element is the body element.we get pixls on it.
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;

    var animator = setTimeout('autoScrollTo(\''+ele+'\')', speed);//This setTimeout Method runs repetly many many times per seconds.This how aniamtion works in JavaScript.speed value is 25.1000 is one second.


    if (yPos > bodyHeight) {//If the yPos is greter than the bodyHeight.clearTimeout

        clearTimeout(animator);

        //If the user hits the bottom of the page stop the setTimeout animator method.


    } else {

        if (currentY < targetY) {

            scrollY = currentY + distance;//distance is the value every time it increments when the loop runs.
            window.scroll(0, scrollY);

        } else {//Once is gets there stop the animator.

            clearTimeout(animator);

        }

    }


}


function resetScroller(ele) {

    var currentY = window.pageYOffset;
    var targetY = document.getElementById(ele).offsetTop;
    var animator = setTimeout('resetScroller(\'' + ele + '\')', 10);

    if (currentY > targetY) {

        scrollY = currentY - distance;
        window.scroll(0, scrollY);

    } else {

        clearTimeout(animator);

    }

}


/*Notes

 * y position is vertical
 * x position is horzontail
 */