window.onload = function () {

    document.getElementsByTagName("img")[0].onclick = fun;
}



function fun() {

    var img = document.getElementsByTagName("img")[0];

 
    if (img.id=='k') {

        img.id = "l";
        img.src = "on.gif";
       

    } else {
        img.id = 'k';
        img.src = "off.gif";
    }

}