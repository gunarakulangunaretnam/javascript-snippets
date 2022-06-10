var fade_in_from = 0;
var fade_out_from = 10;



function fadeIn(element) {

    var target = document.getElementById(element);
    target.style.display = "block";
    var newSetting = fade_in_from / 10;//why i divided it by 10. The answer is the target.style.opacity has to be 0 to 1.
    target.style.opacity = newSetting;
    fade_in_from++;

    //Opacity ranges form  0 to 1 (0 -.1 0 -.2 0 -.3 0 -.4 0 -.5 -etc).

    if (fade_in_from == 10) {

        target.style.opacity = 1;
        clearTimeout(loopTimer);
        fade_in_from = 0;
        return false;
    }

    var loopTimer = setTimeout('fadeIn(\'' + element + '\')', 50);
}



function fadeOut(element) {

    var target = document.getElementById(element);
    
    var newSetting = fade_out_from / 10;
    target.style.opacity = newSetting;
    fade_out_from--;

    if (fade_out_from == 0) {

        target.style.opacity = 0;
        target.style.display = "none";
        clearTimeout(loopTimer);
        fade_out_from = 10;
        return false;
    }

    var loopTimer = setTimeout('fadeOut(\'' + element + '\')', 50);

}

