window.onscroll = yHandler;

function yHandler() {


    var wrap = document.getElementById("wrap");
    var contentHeight = wrap.offsetHeight; //Gets page content height.
    var yOffset = window.pageYOffset//Get vertical scroll position.
    var y = yOffset + window.innerHeight;//If we want to target the bottom of the page we have to pageYOffset shows how much it scrolls

    if (y >= contentHeight) {

        wrap.innerHTML += "<div class='newData'></div>";//why i put += sign the reson is if i only put = sign it will override the content.but it keeps data already in that div and add more.

        //Ajax call to get more dynamic data goes here.
    }


    var status = document.getElementById("status");
    status.innerHTML = contentHeight + " | " + y;

}

