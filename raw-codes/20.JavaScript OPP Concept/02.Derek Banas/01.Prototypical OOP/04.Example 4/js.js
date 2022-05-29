var customer = {

    name: "Guna",

    speak: function () {

        return "My name is " + this["name"];
       
    },

    address: {

        street: "No:3 Kallady Batticala",
        country: "USA",
        state:"North"

    }


}


customer.address.country="Sri Lanka";//I have change the country in this line.



document.write(customer.speak()+"<br>");
document.write("My name is " + customer.name + " I'm from " + customer.address.country + " and i live in " + customer.address.street);

