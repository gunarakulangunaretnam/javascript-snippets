var pagetop, menu, ypos;


function yscroll() {

    pagetop = document.getElementById("pagetop");
    menu = document.getElementById("menu");
    ypos = window.pageYOffset;

    if (ypos > 150) {

        pagetop.style.height = "36px";
        pagetop.style.padding = "8px";
        menu.style.height = "0";
    } else {

        pagetop.style.height = "120px";
        pagetop.style.paddingTop = "50px";
        menu.style.height = "50px";
    }
}

window.addEventListener("scroll", yscroll);