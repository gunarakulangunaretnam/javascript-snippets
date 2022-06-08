window.onload = function () {

    document.getElementById("alertBox1").onclick=function(){alertBox.render("JokerHacker")}
}

    function customDialogBox() {

        this.render = function (msg) {

            //Sets Objects References 

            var alertBoxBg = document.getElementById("alertBoxBg");
            var alertBox = document.getElementById("alertBox");
            alertBoxBg.style.display = "block";
            alertBox.style.display = "block";
            document.getElementById("alertHead").innerHTML = "Acknowladge This Massage";
            document.getElementById("alertBody").innerHTML = msg;
            document.getElementById("alertFoot").innerHTML = "<button onclick='alertBox.ok()'>OK</button>"




        }

        this.ok = function () {

            document.getElementById("alertBoxBg").style.display = "none";
            document.getElementById("alertBox").style.display = "none";


        }
    
    }


    var alertBox = new customDialogBox("");