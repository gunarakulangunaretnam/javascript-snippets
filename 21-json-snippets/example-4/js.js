document.getElementById("btn").onclick = function () { jsonFunction(); };
var place = document.getElementById("dataBox");



function jsonFunction() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8016/jsonfile1.json");

    request.onload = function () {

        if (request.status >= 200 && request.status <= 400) {

            var newData = JSON.parse(request.responseText);
       
            diliverFunction(newData);
        }

    }

   
    request.send();

}


function diliverFunction(datas) {

    var htmlS=""

    for (e = 0; e < datas.length; e++) {


        htmlS += "<p>" + datas[e].name + " and he is a " + datas[e].ambition + "</p>";

    }

    place.insertAdjacentHTML("beforeend", htmlS);



}



