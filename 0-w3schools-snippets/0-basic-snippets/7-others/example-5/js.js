window.onload = function () {

    document.getElementById("btn").onclick = inpArrSystem;
}



function inpArrSystem() {

    var inpVal = document.getElementById("txt").value;
    var split = inpVal.split(" ");
    
    var arrSys = [];

    for (y = 0; y < split.length; y++) {

        arrSys.push(split[y]);
    }
  
    

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

        var newArr = []

        for (i = 0; i < split.length; i++) {

            newArr.push(split[i]);


        }


        var renew = newArr.splice(newArr[0], 1, firstEle);


        return newArr;
    }

    var b = arrSys.looperSystem();
    document.write(b);
   
}









