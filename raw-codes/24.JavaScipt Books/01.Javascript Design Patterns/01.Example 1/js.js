function Car(modal) {

    this.modal = modal;
    this.color = "red";
    this.year = "2016";
    this.getInfo = function () {

        return this.modal + " " + this.year;
    }

}


var car1 = new Car();
car1.modal = "BMW";


console.log(car1.getInfo());