document.onkeydown = function (event) {


    var key_press = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;

    document.getElementById("kp").innerHTML = key_press;
    document.getElementById("kc").innerHTML = key_code;

    var status = document.getElementById("status");

    status.innerHTML = "Down event fired for " + key_press.fontcolor("red");


}


document.onkeyup=function(event){

    var key_press = String.fromCharCode(event.keyCode);

    document.getElementById("status").innerHTML = "Up event fired for " + key_press.fontcolor("green");


}