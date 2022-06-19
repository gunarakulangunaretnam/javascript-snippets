function gameTime(){

var title=document.createTextNode("Here are Some Things");
var displa=document.getElementById("divMovies");

var list=document.createElement("ul");

var ele1=document.createElement("li"); 
var txt1=document.createTextNode("Grand that auto");
ele1.appendChild(txt1);

var ele2=document.createElement("li");
var txt2=document.createTextNode("Card reader");
ele2.appendChild(txt2);

var ele3=document.createElement("li");
var txt3=document.createTextNode("The game of world");
ele3.appendChild(txt3);




list.appendChild(ele1);
list.appendChild(ele2);
list.appendChild(ele3);



displa.appendChild(list);


	
}


/*
*We don't have to close the html elements in JavaScript like this <ul></ul>
 JavaScript will automarically do it for us.


*/