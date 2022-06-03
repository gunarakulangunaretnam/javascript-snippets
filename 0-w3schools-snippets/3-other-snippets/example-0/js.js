function myFunction() {
    var x = document.getElementById("myImg");
    var txt = "";
    var i;
    for (i = 0; i < x.attributes.length; i++) {
        txt = txt + x.attributes[i].name + " = " + x.attributes[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}


//We can change the attributes like this attributes.value="www.hophop.lk";