var fname, lname, gender, country;


function _(x) {

    return document.getElementById(x);
}

function processPhase1() {

    fname = _("firstname").value;
    lname = _("lastname").value;
    _("porgress1").value = 33;
    _("status").innerHTML = "Phase 2 of 3";

    if (fname.length > 2 && lname.length > 2) {

        _("phase1").style.display = "none";// When the user presses the continue button phase1 has to disapper.
        _("phase2").style.display = "block";//And the phase2 has to apper.
        

    } else {

        alert("Please Fill the fields");
    }


   

}


function processPhase2() {

    gender = _("genter").value;

    if (gender.length > 0) {

        _("phase2").style.display = "none";
        _("phase3").style.display = "block";
        _("porgress1").value = 66;
        _("status").innerHTML = "Phase 3 of 3";

    } else {

        alert("Please Choose your gender");
    }

}



function processPhase3() {

    country = _("country").value;

    if (country.length > 0) {

        _("phase3").style.display = "none";
        _("allData").style.display = "block";
        _("dis_fname").innerHTML = fname;
        _("dis_lname").innerHTML = lname;
        _("dis_gender").innerHTML = gender;
        _("dis_country").innerHTML = country;

        _("porgress1").value = 100;
        _("status").innerHTML = "Data Overview";

    } else {

        alert("Please Choose your country");
    }

}

function submitForm() {

    _("multiphase").method = "post";
    _("multiphase").action = "kuna.php";
    _("multiphase").submit();
}

