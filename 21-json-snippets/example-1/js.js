var ourRequest = new XMLHttpRequest();//This is request Object.
ourRequest.open("GET", "http://localhost:8016/jsonfile.json");//This is the link that the JSON is Stored.

ourRequest.onload = function () {//This runs when the josn is loaded.

    var ourData = JSON.parse(ourRequest.responseText);//We convert the file as json.

    console.log(ourData[0]);//Print.
};

ourRequest.send();//Send 


//Sever is requried XAAMP or Anything.