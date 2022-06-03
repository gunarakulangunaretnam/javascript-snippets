window.onload = function () {


    document.getElementById("btn1").addEventListener("click", namesTogether);

}

function namesTogether() {

    var fname = document.getElementById("txt1").value;
    var lname = document.getElementById("txt2").value;

    alert(fname + " " + lname);
}