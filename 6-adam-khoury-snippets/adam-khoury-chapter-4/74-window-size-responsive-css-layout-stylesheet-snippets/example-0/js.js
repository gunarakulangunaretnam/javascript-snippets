function layoutHandler() {

    var styleLink = document.getElementById("styleSheets");

    if (window.innerWidth < 900) {//We can also use this.innerWidth

        styleLink.setAttribute("href", "mobile.css");

    } else if (window.innerWidth < 1200) {

        styleLink.setAttribute("href", "mudium.css");

    } else {

        styleLink.setAttribute("href", "large.css");
    }
}

layoutHandler();

window.addEventListener("resize", layoutHandler);