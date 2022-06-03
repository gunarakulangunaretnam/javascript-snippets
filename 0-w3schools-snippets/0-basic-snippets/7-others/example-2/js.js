var arr = ["kuna", "Joker", "Hacker", "maker", "Gta", "worker"];


Array.prototype.upperSystem = function () {

    for (i = 0; i < this.length; i++) {

        this[this.length-1] = this[this.length-1].toUpperCase();
    }

}


 arr.upperSystem();
document.write(arr);