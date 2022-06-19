function Coordinates() {

    this.latitute = 0;
    this.longtitute = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function () {


    return "The Latitude is " + this["latitute"] + " and the longtitute is " + this.longtitute;


});


Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function (coords) {

    var parts = coords.toString().split(", ");
    this.latitute = parts[0] || "";
    this["longtitute"] = parts[0] || "";

});

var testCoord = new Coordinates();

testCoord.setCoords = "40,70";

document.write(testCoord.getCoords);


//This is the deprecated way to use getter and setter in javaScript but it still works in new browers.
