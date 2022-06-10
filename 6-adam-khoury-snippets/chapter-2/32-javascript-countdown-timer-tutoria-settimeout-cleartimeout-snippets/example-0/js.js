function countDown(sec, ele) {

    var elem = document.getElementById(ele);
    elem.innerHTML = "Plase Wait for " + sec + " Secounds";
    
    sec--;

    if (sec < 1) {
     
        elem.innerHTML = "<h2>This is JokerHacker</h2>";
        elem.innerHTML += "<a href='www.google.lk'>Click Here</a>";

    }



    var timer=setTimeout('countDown('+sec+',"'+ele+'")',1000);



}


window.addEventListener("load",countDown(10,"status"))