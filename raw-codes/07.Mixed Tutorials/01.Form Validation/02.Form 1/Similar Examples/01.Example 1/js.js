window.onload = function () {

    document.getElementById("submit").onclick = function () { formValidation() };

}

function formValidation() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phoneNumber = document.getElementById("phone").value;

    var dis = document.getElementsByTagName("span");

    

    
    if (isNaN(fname)) {

        dis[0].innerHTML = "";

    } else if (fname == "") {

        dis[0].innerHTML = "You have to Enter the firstname";
        dis[0].style.color = "red";

    } else {


        dis[0].innerHTML = "You must enter only string values";
        dis[0].style.color = "green";
    }
     
      
    

    if (lname == "") {

        dis[1].innerHTML = "You have to Enter the lastname";
        dis[1].style.color = "red";

    } else if (isNaN(lname)) {

        dis[1].innerHTML = "";

    } else {

        dis[1].innerHTML = "You must enter only string values";
        dis[1].style.color = "green";

    }


    if (phoneNumber == "") {

        dis[2].innerHTML = "You have to enter the Phone number";
        dis[2].style.color = "red";
    
    } else if(isNaN(phoneNumber)) {


        dis[2].innerHTML = "You must Enter only Numerical Values";
        dis[2].style.color = "green";


    }



    var genters = document.getElementsByName("gen");
    var i = 0;
    for (a = 0; a < genters.length; a++) {

        if (genters[a].checked) {

            i++;

        } 


        if (i == 0) {

            dis[3].innerHTML = "You have to check your sex";
            dis[3].style.color = "red";

        } else {

            dis[3].innerHTML = "";

        }
    }
}