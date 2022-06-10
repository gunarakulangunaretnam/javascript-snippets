var textStr = "My name is JokerHacker I am going to hack your system in ten minutes";
var myArr = textStr.split("");
var myTimer;



function frameLooper() {


    if (myArr.length > 0) {

        document.getElementById("texts").innerHTML += myArr.shift();//i use += to append to it.if i use only = sign it will only show one charactor at a time.


    } else {

        clearTimeout(myTimer);
    }

    myTimer = setTimeout("frameLooper();",70);//if you want to type faster you have to give smaller number or you want slower give bigger number.



}


frameLooper();