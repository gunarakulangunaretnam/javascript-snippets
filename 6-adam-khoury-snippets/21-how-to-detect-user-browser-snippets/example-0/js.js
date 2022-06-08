var ba = ["Chrome", "Firefox", "Safari", "Opera", "MSIE", "Trident","Edge"];

var userA=navigator.userAgent;


var bName;

for (a = 0;a< ba.length; a++) {

    if (userA.indexOf(ba[a]) > -1) {

        bName = ba[a];
        break;
    }

   
}

if (bName == "MSIE" || bName == "Trident" || bName == "Edge") {

    alert("You are using "+bname+" Browser")
}

alert("You are Using "+bName+" Browser");