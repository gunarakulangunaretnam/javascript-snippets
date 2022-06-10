window.onload = function () {

    document.getElementById("changeBg").onclick = function () {prompt1.render() }
}

    function changeBg() {


        this.render = function (val) {

            document.getElementById("box").style.display = "block";
            document.getElementById("bg").style.display = "block";
            document.getElementById("head").innerHTML = "A value is required";
            document.getElementById("body").innerHTML="Type color name ";
            document.getElementById("body").innerHTML += "<input type='text' id='v1'>";
            document.getElementById("foot").innerHTML = "<button onclick='prompt1.ok()'>OK</button><button onclick=prompt1.cancel()>Cancel</button>";

        }

        this.ok = function () {

            var val = document.getElementById("v1").value;
            document.body.style.backgroundColor = val;

            document.getElementById("box").style.display = "none";
            document.getElementById("bg").style.display = "none";
        }

        this.cancel = function () {

    

                document.getElementById("box").style.display = "none";
                document.getElementById("bg").style.display = "none";
         

        }
    }


    var prompt1 = new changeBg();