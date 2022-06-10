function addEvents() {

    document.getElementById("btn").onclick = function () { fun1() };


    
}

window.onload = addEvents();

function fun1() {

        alert("This is the second old way to handle events");
    }

//This is the second old way to handle events.