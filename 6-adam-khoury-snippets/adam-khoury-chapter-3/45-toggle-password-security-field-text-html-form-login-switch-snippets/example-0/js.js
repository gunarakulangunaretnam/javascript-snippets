function passwordSystem() {


    var pass = document.getElementById("pass");
    var passBtn = document.getElementById("passBtn");

    if (pass.type == "password") {

        pass.type = "text";
        passBtn.value = "Hide the password";

    } else {

        pass.type = "password";
        passBtn.value = "Show the password";
        
    }
}