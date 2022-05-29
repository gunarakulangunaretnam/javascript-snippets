window.onload = function () {

    var tets = document.getElementById("dis").innerHTML;
    alert(tets.match(/\w/g).length);
}

