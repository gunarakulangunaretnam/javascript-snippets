var div = document.createElement("div");
div.style.height = "100vh";//This is 100% viewing height
document.body.appendChild(div);

div.addEventListener("mousemove", function (event) {

    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + " " + y;
    div.style.fontSize = "25px";
    div.style.fontWeight = "bold";
    div.style.backgroundColor="rgb("+x+","+y+","+100+")"

});


