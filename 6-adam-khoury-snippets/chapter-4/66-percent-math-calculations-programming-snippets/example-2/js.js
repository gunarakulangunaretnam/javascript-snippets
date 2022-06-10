var bar1 = document.getElementById("bar1");
var precent = 50;
var newleft = Math.round(bar1.offsetWidth * precent) / 100;
bar1.children[0].style.left = newleft - bar1.children[0].offsetWidth / 2 + "px";//This code is center corrcetly even if the width of the div is heigh.