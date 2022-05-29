function toggleNavPanel(x) {

    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH = "300px";

    if (panel.style.height == maxH) {

        panel.style.height = "0px";
        navarrow.innerHTML = "&#9662";

        /*
         * if the panel is opened close it
         * 
         */

    } else {

        panel.style.height = maxH;
        navarrow.innerHTML = "&#9652";


        /*
         * if the panel is closed open it.
         * 
         */
    }

}