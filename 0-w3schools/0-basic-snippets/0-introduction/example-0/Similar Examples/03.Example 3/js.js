window.onload = function () {

    document.getElementById("k")["onclick"] = fun;
}

function fun() {

    var img = document.getElementById("k");

    if (img.src.match("pic1.gif")) {

        img.src = "pic2.gif";

    } else if(img.src.match("pic2.gif")){

        img.src = "pic3.gif";

    } else if (img.src.match("pic3.gif")) {

        img.src = "pic4.gif";
    } else if(img.src.match("pic4.gif")) {

        img.src = "pic5.gif";
    
    }else if(img.src.match("pic5.gif")){
     
        img.src = "pic6.gif";
        
    } else if (img.src.match("pic6.gif")) {

        img.src = "pic7.gif";

    } else {

        img.src = "pic1.gif";
    }

  
}