var box = document.createElement("div");
box.style.height = "250px";
box.style.width = "250px";
box.style.backgroundColor = "red";
box.style.border = "green";
box.style.position = "relative";

document.body.appendChild(box);

var pos = 0;

var timer = setInterval(function () {

    if (pos == 500) {

        clearInterval(timer);

    } else {

        pos++;
        box.style.left = pos + "px";


    }

},10)