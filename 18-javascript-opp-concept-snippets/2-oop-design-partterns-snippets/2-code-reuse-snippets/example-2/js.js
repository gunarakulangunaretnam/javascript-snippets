var joker = {

    firname: "Joker",
    lastname: "Hacker",
    sayname: function () {

        return this.firname + " " + this.lastname;

    }
};

var kuna = Object.create(joker, {

    firstname: { value: "Kuna" },
    lastname: { value: "Rakulan" }


});


document.write(joker.sayname()+"<br>");
document.write(kuna.sayname());


//Object.create is used to crrate an object bashed on another object.
