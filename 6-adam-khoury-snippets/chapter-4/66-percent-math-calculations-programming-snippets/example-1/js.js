var bar1 = document.getElementById("bar1");
var precent = 50;
var newleft = Math.round(bar1.offsetWidth * precent) / 100;
bar1.children[0].style.left = newleft+"px";