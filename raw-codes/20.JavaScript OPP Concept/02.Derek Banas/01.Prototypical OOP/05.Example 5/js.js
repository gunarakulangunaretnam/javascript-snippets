function Person(name, country) {

    this.name = name;
    this.country = country;

    this.info = function () {

        return "My name is " + this['name'] + " and i libve in " + this.country;

    }
}

var kuna = new Person("Kuna", "Sri Lanka")

var Joker = new Person("JokerHacker", "USA");



document.write(kuna.info() + "<br>");

document.write(Joker.info()+"<br>");

document.write((kuna instanceof Person)+"<br>");//This line of code determines if kuna is instance of Person ..! Yes It's true.

document.write((Joker instanceof Person)+"<br>");//This line of code determines if joker is instance of Person ..! Yes It's true.



