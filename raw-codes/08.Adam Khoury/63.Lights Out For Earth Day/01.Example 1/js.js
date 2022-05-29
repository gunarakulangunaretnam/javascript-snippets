var mode = "default";

function swapStyleSheets() {

    var styleSheets = document.getElementById('styleSheets');
    var img = document.getElementById("lightSwtich");

    if (mode == "default") {

        styleSheets.setAttribute("href", "dark.css");
        img.src = "off.jpg";
        img.title = "Close theatre mode";
        mode = "dark";

    } else {
        styleSheets.setAttribute("href", "default.css");
        img.src ="on.jpg";
        img.title = "Make Theatre mode";
        mode = "default";
    }

}