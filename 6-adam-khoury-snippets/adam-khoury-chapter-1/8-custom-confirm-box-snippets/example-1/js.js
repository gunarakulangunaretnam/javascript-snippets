var namesArr = new Array("Kuna", "Rakulan", "Gta", "Joker", "Hacker");

document.getElementById("dis").innerHTML = namesArr;


function deleteArr() {

    this.render = function () {


        document.getElementById("dialogoverlay").style.display = "block";
        document.getElementById("dialogbox").style.display = "block";
        document.getElementById("dialogboxhead").innerHTML = "Comfirm That Action";
        document.getElementById("dialogboxbody").innerHTML = "Do you like to remove the element form array";
        document.getElementById("dialogboxfoot").innerHTML = "<button onclick='deletation.yes()'>Yes</button> <button onclick='deletation.no()'>No</button>";

    }

   
    this.yes = function () {
        namesArr.pop();
       var newarr= document.getElementById('dis').innerHTML = namesArr;
       if (newarr.length == -0) {

           document.getElementById("dis").innerHTML = "There is nothing to delete";
       }
        document.getElementById("dialogoverlay").style.display = "none";
        document.getElementById("dialogbox").style.display = "none";
        
    }


    this.no = function () {

        document.getElementById("dialogoverlay").style.display = "none";
        document.getElementById("dialogbox").style.display = "none";

    }


    

}

var deletation = new deleteArr();