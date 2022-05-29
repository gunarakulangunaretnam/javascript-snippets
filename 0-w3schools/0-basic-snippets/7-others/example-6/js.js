var arr = [1, 2, 3, 4, 5];


Array.prototype.incrementer = function () {

   
    var arr = [];
    
    for (i = 0; i < this.length; i++) {

       
        arr.push(this[i]);
  

    }

    var lastEle = this[this.length - 1]+1;
    var into = arr.toString();
    var re = into.replace(this[this.length - 1], lastEle);


    return re
}

var a=arr.incrementer();
alert(a);