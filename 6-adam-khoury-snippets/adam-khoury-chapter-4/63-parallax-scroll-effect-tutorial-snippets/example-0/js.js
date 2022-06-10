function paralex() {

   var k=  document.getElementById("prlx_lyr_1");
   k.style.top = window.pageYOffset + "px";//window.pageYOffset  works as downwords but if you put -window.pageYOffset it will work upwords

}

window.addEventListener("scroll", paralex);

