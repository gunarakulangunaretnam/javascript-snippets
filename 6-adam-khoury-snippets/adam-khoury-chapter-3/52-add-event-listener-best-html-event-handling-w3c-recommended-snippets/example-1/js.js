function addEvents() {

    document.getElementById("btn").onclick = function () { fun1() };


    function fun1() {

        alert("This is the second old way to handle events");
    }
}

window.onload = addEvents();


//This is the second old way to handle events.