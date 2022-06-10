function cdtd() {

    var xmas = new Date("December 25, 2016 00:01:00");
    var now = new Date();

    var timeDiff = xmas.getTime() - now.getTime();

    if (timeDiff <= 0) {

        clearTimeout(timer);
        document.write("The Christmas is here");

    }


    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    seconds %= 60;//It is for get the right seconds method.
    hours %= 60;//It is for get the right hours. 
    minutes %= 60;//It is for get the right minutes.


   


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;


    var timer = setTimeout("cdtd()", 1000);

     
}

window.addEventListener("load", cdtd());