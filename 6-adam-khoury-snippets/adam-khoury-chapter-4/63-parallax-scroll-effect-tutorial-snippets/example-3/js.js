function paralex() {

   var k=  document.getElementById("prlx_lyr_1");
   k.style.top = -(window.pageYOffset/18) + "px";//4 is the speed value. if you give higher number it will be very slow.
}

window.addEventListener("scroll", paralex);

