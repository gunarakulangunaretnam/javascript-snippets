function Points() {

    this.xPos = 0;
    this.yPos = 0;
}

Object.defineProperty(Points.prototype, "pointPos", {


    get: function () {

        return "The X postion is " + this.xPos + " and  the Y postion is " + this.yPos;

    },

    set: function (thenewPonts) {


        var parts = thenewPonts.toString().split(", ");
        this.xPos = parts[0] || "";
        this.yPos = parts[1] || "";
         

    }
});


var aPoint = new Points();

aPoint.pointPos = "10,50";

document.write(aPoint.pointPos);


//This is the 3rd way to use getter and setters in JavaScript.