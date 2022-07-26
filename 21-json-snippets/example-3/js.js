document.getElementById("infoBtn").addEventListener("click", ajaxJson);//Button Event.
var displayPlace = document.getElementById("info");//The place that we want to print the data.
var pageCounter = 1;//This is the index position of the page.

function ajaxJson() {

 

    var ourRequest = new XMLHttpRequest();//This is the tool to commiucate with other resourses.
    ourRequest.open("GET", "http://localhost:8016/jsonfile"+pageCounter+".json");//This is the link that we want to get.We have used a GET Method.

    ourRequest.onload = function () {//once the JSON loaded.

        var ourData = JSON.parse(ourRequest.responseText);//convert the data as JSON.

        renderHTML(ourData);//call the funtion with the JOSN Data,
     
    }

    ourRequest.send();//This is imfortant.
    pageCounter++;//increment the value ate here.

    if (pageCounter > 3) {//if the pageCounter greather than 2 hide the btn.

        document.getElementById("infoBtn").style.display = "none";
    }
   
}


function renderHTML(data) {

    var htmlString = "";

    for (e = 0; e < data.length; e++) {//We run the function and prints and data that are in the JSON file.

        htmlString += "<h4>" + data[e].name + " and he is a" + data[e].ambition + "</h4>";


    }

    displayPlace.insertAdjacentHTML("beforeend", htmlString)//I have used insertAdjacentHTML.

}

//Multiple JSON files.
//XAAMP is requried.