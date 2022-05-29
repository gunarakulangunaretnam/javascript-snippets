function Person() {

    this.name = "Guna";
    


}


Person.prototype.job = "Software Engineer";


var kuna = new Person();


document.write(kuna.hasOwnProperty("name")+"<br>");
document.write(kuna.hasOwnProperty("job"));//Because the job Property is stored in Prototypical system.But the name is stored in the Person Object.