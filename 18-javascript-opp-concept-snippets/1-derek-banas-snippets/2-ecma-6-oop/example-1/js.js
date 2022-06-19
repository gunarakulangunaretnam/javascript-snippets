function points(xPos, yPos) {//This is the stayable ECMA Script.

    this.xPos = xPos;
    this.yPos = yPos;

};


points.prototype.getPos = function () {

    return "The X Position is " + this.xPos + " and The Y postion is " + this.yPos;
};


var aPoint = new points(10, 2);

document.write("This is the stayable ECMA Script." + aPoint.getPos()+"<br>");





class point {//This is The ECMA 6 Sciprt

    constructor(xPos, yPos) {

        this.xPos = xPos;
        this.yPos = yPos;
    }

    getPoss() {

        return "The X position is " + this.xPos + " and The Y postion is " + this.yPos;

    }
}


var pointer = new point(200, 22);

document.write("This is The ECMA 6 Sciprt" + pointer.getPoss());