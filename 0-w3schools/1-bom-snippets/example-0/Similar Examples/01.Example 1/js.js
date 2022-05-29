window.onload = function () {

    document.getElementById("open").onclick = openFun;


}

function openFun() {

   

    var win;

    win = window.open("www.google.lk", "_blank", "width=250,height=250");

    document.getElementById("close").onclick = function () { closeFun() };
    document.getElementById("check").addEventListener("click", checkFun);

    function closeFun() {

        
        if (win) {

            win.close();
        }
    }


    function checkFun() {

        if (win.closed) {

            document.getElementById("dis").innerHTML = "The window is closed";

        } else {

            document.getElementById("dis").innerHTML = "The window is open";

        }
    
    }
}

