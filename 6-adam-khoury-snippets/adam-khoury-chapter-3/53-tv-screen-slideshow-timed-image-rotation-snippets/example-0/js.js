var myScreen = document.getElementById("myScreen");
var myPics = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];

var totalPics = myPics.length;

var i = 0;//i is the index.

function loop() {

    if (i > (totalPics - 1)) {//All array index is default starts with 0.pic3.jpg has the index number of two.

        i = 0;

    }

    myScreen.innerHTML = '<img src="' + myPics[i] + '">';
    i++//This is the way to increse by one each time the function works.This is same as i=i+1 and i+=1;

    loopTimer = setTimeout('loop()', 3000);//Every 3 seconds this funvtion runs.
}

loop();

