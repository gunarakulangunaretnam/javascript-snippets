var index = 0;
var myNamesArr = ["Kuna", "Rakulan", "Gta", "Joker", "Hacker"];
var myNameDisplay;

window.onload = function () {

    myNameDisplay = document.getElementById("myNames");
    mainSlider();
}


function mainSlider() {


    myNameDisplay.innerHTML = myNamesArr[index];
    myNameDisplay.style.opacity = 1;

    setTimeout("nextSlider()", 2000);


}


function nextSlider() {

    index++;
    myNameDisplay.style.opacity = 0;
	
    if (index > (myNamesArr.length - 1)) {

        index = 0;

    }

    setTimeout("mainSlider()", 1000);


}


/*Notes

  explanation of the program.

  *Once the entire web application finishes.This program get the 'myName' element and store to the myNameDisplay variable.
  *Then it calls the mainSlider() function.
  *inside the mainSlider() function it displays the Array value depending on the index value.Then it sets the opacity to 1.
  *After two seconds it runs the nextSlider() function.
  *The nextSlider() function increments the index value each time depending on the loop.
  *Then its sets the  myNameDisplay opacity to 0.
  *If the index value is gretar than the  myNamesArr length,it sets the index value to 0.
  *This way the loop runs agian after it finishes all array elements; 
  *Then the nextSlider() function runs mainSlider() function after one second.
  
  
  
  



*/
