window.addEventListener("load", rotateAnimation("img1", 20));


var degrees = 0;
var looper;

function rotateAnimation(ele, speed) {
    
    elem = document.getElementById(ele);
   
   

    if (navigator.userAgent.match("Chrome")) {

        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";

    } else if (navigator.userAgent.match("Firefox")) {

        elem.style.MozTransform = "rotate(" + degrees + "deg)";

    } else if (navigator.userAgent.match("MSIE")) {

        ele.style.MsTransform = "rotate(" + degrees + "deg)";
    
    } else if (navigator.userAgent.match("Opera")) {

        ele.style.MsTransform = "rotate(" + degrees + "deg)";

    } else {

        ele.style.transform = "rotate(" + degrees + "deg)";
        
    }



    looper = setTimeout('rotateAnimation(\'' + ele + '\',' + speed + ')', speed);

    degrees++;

    if (degrees > 359) {

        degrees = 1;
    }


    document.getElementById("dis").innerHTML = "rotate(" + degrees + "deg)";
}


/*

 *for reverse rotatation
 
 
   degrees--;

    if (degrees < -359) {

        degrees = -1;
    }





*/