var obj = {

}


Object.defineProperty(obj, "firstName", {//obj is the Object that we want to access.firstName is the property.

    value:"KunaRakulan"

});

document.write("It is in defineProperty " + obj.firstName+"<br>");

Object.defineProperties(obj, {//obj is the Object that we want to access.The properties can be used as bellow.

    fname: {

        value:"Joker"
    },

    lname: {

        value:"Hacker"
    }

});


document.write("It is in defindeProperties " + obj.fname + " " + obj.lname);


//The difineProperty and defineProperties are used to define objects properties and methods.