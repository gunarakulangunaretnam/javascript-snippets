function changeText(val) {

    document.getElementById("dis").innerHTML = val;
}


function doSome(val) {

    document.body.style.backgroundColor = val;
}


function customPrompt() {

    this.render = function (dialog,func) {

        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogboxoverlay = document.getElementById("dialogoverlay");//Obj reference of dialogoverlay.
        var dialogbox = document.getElementById("dialogbox");//Obj reference of dialogbox.
        dialogboxoverlay.style.display = "block";
        dialogboxoverlay.style.height = winH + 'px';
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px" //This will center the box. 550 is the width of the dialog box.550 * 0.5 means 550 is devided by 2.
        dialogbox.style.top = '100px';
        dialogbox.style.display = "block";
        document.getElementById("dialogboxhead").innerHTML = "A value is required";
        document.getElementById("dialogboxbody").innerHTML = dialog;
        document.getElementById("dialogboxbody").innerHTML += '<br><input type="text" id="prompt_value1">';
        document.getElementById("dialogboxfoot").innerHTML = '<button onclick="Prompt.ok(\'' + func + '\')">OK</button> <button onclick="Prompt.cancel()">No</button> ';



    }

    this.ok = function (func) {

        var prompt_value1 = document.getElementById("prompt_value1").value;
        window[func](prompt_value1);

        document.getElementById("dialogoverlay").style.display = "none";
        document.getElementById("dialogbox").style.display = "none";
    }

    this.cancel = function () {

        document.getElementById("dialogoverlay").style.display = "none";
        document.getElementById("dialogbox").style.display = "none";

    }
    
}

var Prompt = new customPrompt();

