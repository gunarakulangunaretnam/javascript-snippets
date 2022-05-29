var arr = ["kuna", "Joker", "Hacker", "maker", "Gta", "worker"];
Array.prototype.myuse = function () {

    for (i = 0; i < this.length; i++) {

        this[i]=this[i].toUpperCase();

    }


}

arr.myuse();
alert(arr)