window.onload = function () {

    document.getElementById("btn").onclick = checkerFunction;

}

function checkerFunction() {


    var inp = document.getElementById("txt").value;
    var toStr = String(inp)
    var splitStr = toStr.split("");
    splitStr.pop();
    var last = toStr.split("");
    last = toStr[toStr.length - 1];
   
    (function () {


        var s = 0;

        for (a = 0; a < splitStr.length; a++) {

            if (splitStr[a] == last) {

                alert(true)
                s++;
            }

        }

        if (s == 0) {

            alert(false);
        }

    })();

    

    


  
    

}