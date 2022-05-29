window.onload = function () {

    document.getElementById("valid").addEventListener("click",inputSystem);
   
}


function inputSystem() {

    var inputValue = document.getElementById("txt1").value;
    var outputDisplay = document.getElementsByTagName("h1")[0];

    if (inputValue == "") {

        outputDisplay.innerHTML = "The input Feild is Empty";
        outputDisplay.style.color = "red";

    
    } else if (inputValue > 0 && inputValue < 10) {

        outputDisplay.innerHTML = "The input is valid";
        outputDisplay.style.color = "green";
    } else {

        outputDisplay.innerHTML = "Input is not valid";
        outputDisplay.style.color = "red";

    }

   
    

}