function paralex() {

   var k=  document.getElementById("prlx_lyr_1");
   k.style.top = -window.pageYOffset + "px";//It will work as upwords
}

window.addEventListener("scroll", paralex);

