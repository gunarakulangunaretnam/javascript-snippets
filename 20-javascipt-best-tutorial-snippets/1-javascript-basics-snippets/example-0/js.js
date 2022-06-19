var items = document.getElementById("list").getElementsByTagName("li");
var head = document.getElementById("head");
var posNumber = 0;


for (s = 0; s < items.length; s++) {

    items[s].addEventListener("click", activator);
  
}

function activator() {

    head.innerHTML = this.innerHTML;
    
    for (a = 0; a < items.length; a++) {

        items[a].classList.remove("active");

    }

    this.classList.add("active");

}


//+= this is equel to append.But this not in this code.

