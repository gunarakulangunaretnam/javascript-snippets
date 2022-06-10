var d = 0;

function rotateAnimation(ele, dir) {

  var elem= document.getElementById(ele);

    if (dir == "ccw") {

        d--;

    } else {

        d++;

    }

    elem.style.WebkitTransform = "rotate(" + d + "deg)";
    elem.style.MozTransform = "rotate(" + d + "deg)";
    elem.style.msTransform = "rotate(" + d + "deg)";
    elem.style.OTransform = "rotate(" + d + "deg)";
    elem.style.transform = "rotate(" + d + "deg)";


    if (d > 359) {

        d = 1;

    } else if (d < -359) {

        d = -1;

    }


    setTimeout(function () { rotateAnimation(ele,dir)},20)

}


rotateAnimation("img1", "cw");
rotateAnimation("img2", "ccw");
rotateAnimation("img3", "cw");


//It's not object orended method.