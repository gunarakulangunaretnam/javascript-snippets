function toggleTheatreMode() {

    var bg = document.getElementById("overlay");
    var img = document.getElementById("lightSwtich");

    if (bg.style.display == "block") {

        bg.style.display = "none";
        img.src = "on.jpg";
        img.title = "Enter Theatre Mode";

    } else {

        bg.style.display = "block";
        img.src = "off.jpg";
        img.title = "Close Theatre Mode";
    }
}