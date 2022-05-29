function yScrollHandler() {

    var win = document.getElementById("peekaboo");
 
    if ((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight) {

        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.right = "0px";
    } else {

        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.right = "-352px";

    }
}

window.onscroll = yScrollHandler;


/*Notes

*pageYOffset method returns the scroll position value.
*InnrHeight returns the height of the window object.
*offsetHeight returns the webpage height.

*/