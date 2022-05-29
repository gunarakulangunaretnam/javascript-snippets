var add = (function () {
    
    var counter = 0;

   
    return function () {

        return counter++;

    }


})();


window.onload = function () {

    document.getElementById("click").onclick = counterUp;

}

function counterUp() {

    document.getElementById("dis").innerHTML = add();
}