function passwordSystem() {


    var pass = document.getElementById("pass");
    var passBtn = document.getElementById("passBtn");

    if (pass.type == "text") {

        pass.type = "password";
        passBtn.value = "Hide The Password";

    } else {

        pass.type = "text";
        passBtn.value = "Show The Password";

        
    }
}