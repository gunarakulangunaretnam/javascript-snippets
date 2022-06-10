function startOverlay() {

    var bg = document.getElementById("overlay");
    bg.style.opacity = 0.7;

    if (bg.style.display == "block") {

        bg.style.display = "none";

    } else {

        bg.style.display = "block";
    }
    
}