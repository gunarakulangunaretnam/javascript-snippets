var theBox = document.getElementById("mainBox");
var subBox = document.getElementById("subBox");
var percent = 50;
var newLeft = Math.round(theBox.offsetWidth * percent / 100);

subBox.style.left = newLeft + "px";