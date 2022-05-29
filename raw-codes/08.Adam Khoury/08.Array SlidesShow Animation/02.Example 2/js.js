var index = 0;

var imgs = new Array();
imgs[0] = "<img src='images (1).jpg'  style='width:500px;height:500px' />"
imgs[1] = "<img src='images (2).jpg'  style='width:500px;height:500px' />"
imgs[2] = "<img src='images (3).jpg'  style='width:500px;height:500px' />"
imgs[3] = "<img src='images (4).jpg'  style='width:500px;height:500px' />"
imgs[4] = "<img src='images (5).jpg'  style='width:500px;height:500px' />"



window.onload = function () {

    display = document.getElementById("Img_box");
    sliderFun1();
}


function sliderFun2() {

    index++;
    display.style.opacity = 0;

    if (index > (imgs.length - 1)) {

        index = 0;
    }

    setTimeout("sliderFun1()", 1000);
    
}

function sliderFun1() {

    display.innerHTML = imgs[index];
    display.style.opacity = 1;

    setTimeout("sliderFun2()", 2000);
    
}



/*Notes

*We can use any kinds of HTML elements as an array value like above.

*/

