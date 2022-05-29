window.onload = function () {

    document.getElementById("valid").onclick = inputSystem;
}

function inputSystem() {

    var inpVal = document.getElementById("txt1").value;
    var out = document.getElementsByTagName("h1")[0];

    try {

        if (inpVal == "") {

            throw "Empty";

        } else if (inpVal.match(/[a-zA-z]/img)) {

            throw "String You must an numbetric value";

        } else if (inpVal > 0 && inpVal < 10) {

            throw "Ok";
        } else {

            throw "Not Valid";
        }
    
    }


    catch (err) {

        out.innerHTML = "The input is " + err;

        if (err == "Empty") {

            out.style.color = "red";


        } else if (err.match("String")) {

            out.style.color = "red";


        } else if (err == 'Ok') {

            out.style.color = "green";
        } else if (err.match("Not")) {

            out.style.color = "darkRed";

        } else {


        }

    }

}