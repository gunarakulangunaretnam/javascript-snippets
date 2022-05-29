var deArr = ["Kuna", "Rakulan", "Joker", "Hacker", "Gta", "Maker"];




Array.prototype.looperSystem = function () {


    var arr = [];


    for (i = 0; i < this.length; i++) {
       
        arr.push(this[i]);
       
    }

    var last = arr[this.length - 1];
    var newlat = last.fontcolor("red");
    var intoStr = arr.toString();
    var re=intoStr.replace(this[this.length - 1], newlat);
    
    return re;
}

var b = deArr.looperSystem();

document.write(b);