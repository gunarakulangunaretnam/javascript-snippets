window.addEventListener("load", function (event) { initemenu() });

function _(x) {

    return document.getElementById(x);

}



function initemenu() {

    _("btn_maker").style.left = _("btn1").offsetLeft + "px";//The btn_maker left is assigned to the btn1 offsetleft value.
    _("btn_maker").style.width = _("btn1").offsetWidth - 2 + "px";//This is same above but i put offsetWidth-2 because the btn_maker has a border to match exactly of the width of the button.
    _("btn_maker").style.display = "block";//It shows on the page.

}


function loadContent(btn) {

    _("btn_maker").style.left = btn.offsetLeft + "px";//It get btn offsetLeft value dynamically.
    _("btn_maker").style.width = btn.offsetWidth - 2 + "px";//It get btn offsetWidth value dynamically.
    _("mycontent").innerHTML = "Content for " + btn.innerHTML + " Loaded";



}

  

    //We can load Ajax request if we want to get dynamic data form the server and bring it into the box.
    //We can have an array of data directly in your JavaScript.