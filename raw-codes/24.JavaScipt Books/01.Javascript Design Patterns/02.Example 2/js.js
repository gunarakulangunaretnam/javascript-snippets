function Car(modal, speed, year) {

    this.modal = modal;
    this.speed = speed;
    this.year = year;

    this.getInfo = function () {

        document.write(this.modal + " " + this.speed + " " + this.year);

    }
}



var car1 = new Car("BMW", "1500", "2018");
var car2 = new Car("Ford", "2000", "2019");

car1.getInfo();
car2.getInfo();

