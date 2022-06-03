var deArr = ["Kuna", "Rakulan", "Joker", "Hacker", "Gta", "Maker"];




Array.prototype.looperSystem = function () {


    var arr = [];


    for (i = 0; i < this.length; i++) {
       
        arr.push(this[i]);
       
    }


    var lastEle = this[this.length - 1].fontcolor("red");
    var firstEle = this[0].fontcolor("blue");
    var intoStr = String(arr);
    var re = intoStr.replace(this[this.length - 1], lastEle);
    var split = re.split(",");
   
    var newArr=[]

    for (i = 0; i < split.length; i++) {

        newArr.push(split[i]);


    }


    var renew = newArr.splice(newArr[0], 1, firstEle);
    
    
    return newArr;
}

var b = deArr.looperSystem();

document.write(b);