function addEvents() {

    

    if (window.addEventListener) { //This line means if the window.addEventListener method avaliable for use then use this block of code.
                                 
        document.getElementById("btn").addEventListener("click", fun1, false);
        document.getElementById("btn").addEventListener("mouseleave", fun2, false);

    } else if (window.attachEvent) { //Added for Internet explorer previous to IE9.This is for older browsers.

        document.getElementById("btn").attachEvent("onclick", fun1);
        document.getElementById("btn").attachEvent("onmouseleave", fun2);
    }
  
}

window.onload = addEvents;


function fun1() {

    alert("This is Mouse Click events");
}

function fun2() {

    alert("This is mouse leave");
}

//Put Javascript here when ready.

//We don't have to 'on' prefiex for addEventListener.but do have to use it for attachEvent. 