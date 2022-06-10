function expand(ele) {

    var target = document.getElementById(ele);
    var h = target.offsetHeight;//offsetHeight is the height of the div.It set tov 0 in the css.
    var sh = target.scrollHeight;// ScrollHeight means content height within the div. It is the content height of the div.

    var loopTimer = setTimeout('expand(\'' + ele + '\')', 8);//This is the looper it runs the function every 8 milliseconds.


    if (h < sh) { //If the offsetHeight is less than the ScrollHeight when every time the loop runs.It has to increment the value by 5 to h variable.
                 //offsetHeight is the height of the div,ScrollHeight is the content height of the div.
        h += 5;

    } else {  //If the offsetHeight is greter than the ScrollHeight then run the bellow code.

        clearTimeout(loopTimer);
        alert("Expansion Completed");

    }

    target.style.height = h + "px";//This line means when the every time the loop runs increment the value by px.
    

}

function retract(ele) {
    var target = document.getElementById(ele);
    var h = target.offsetHeight;
 

    var loopTimer = setTimeout('retract(\'' + ele + '\')', 8);


    if (h > 0) {

        h -= 5;

    } else {
      

        clearTimeout(loopTimer);
      
       

    }

    target.style.height = h + "px"

}

//The Speed is depands on the 8,5 values.