var address = {

    street: "No street",
    city: "No City",
    state: "No state",

    get getAddress() {

        return this.street + " , " + this.city + " , " + this.state;

    },

    set setAddress(theAddress) {

        var parts = theAddress.toString().split(", ");//We get the address and converted to string and split it by ,


        this["street"] = parts[0] || "";//We assign first part if is not assgin "" empty. for all follwing.
        this.city = parts[1] || "";
        this["state"]=parts[2] || "";

    }



}
address.setAddress = "123 main St, Kallady, Bactticala";//We must not use () We must assign like = this.

document.write(address.getAddress);//We must not call it like address.getAddress();


//This is the geter and seter in JavaScript.
