function paralex() {
   
    var box1 = document.getElementById("prlx_lyr_1");
    var box2 = document.getElementById("prlx_lyr_2");
    box1.style.top = -(window.pageYOffset / 4) + "px";
    box2.style.top = -(window.pageYOffset / 14) + "px";
}

window.addEventListener("scroll", paralex);

