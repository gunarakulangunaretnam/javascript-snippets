function onoffSystem() {

    var light = document.getElementById("light");

    if (light.src.match("off")) {

        light.src = "on.gif"
		
    } else {

        light.src = "off.gif";
    }

}

