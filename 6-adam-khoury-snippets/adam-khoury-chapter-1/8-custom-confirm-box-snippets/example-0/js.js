function deletePost(id) {

    var db_id = id.replace('post_', "");
    document.body.removeChild(document.getElementById(id));
}

function customComfirm() {

    this.render = function (dialog,op,id) {

        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogboxoverlay = document.getElementById("dialogoverlay");//Obj reference of dialogoverlay.
        var dialogbox = document.getElementById("dialogbox");//Obj reference of dialogbox.
        dialogboxoverlay.style.display = "block";
        dialogboxoverlay.style.height = winH + 'px';
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px" //This will center the box. 550 is the width of the dialog box.550 * 0.5 means 550 is devided by 2.
        dialogbox.style.top = '100px';
        dialogbox.style.display = "block";
        document.getElementById("dialogboxhead").innerHTML="Comfirm That Action"
        document.getElementById("dialogboxbody").innerHTML = dialog;
        document.getElementById("dialogboxfoot").innerHTML = '<button onclick="comfirm.yes(\'' + op + '\',\'' + id + '\')">Yes</button> <button onclick="comfirm.no()">No</button> ';



    }

    this.yes = function (op,id) {

        if (op == "delete_post") {

            deletePost(id);
        }


        document.getElementById("dialogoverlay").style.display = "none";
        document.getElementById("dialogbox").style.display = "none";
    }

    this.no = function () {

        document.getElementById("dialogoverlay").style.display = "none";
        document.getElementById("dialogbox").style.display = "none";

    }
    
}

var comfirm = new customComfirm();

