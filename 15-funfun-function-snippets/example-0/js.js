const food = {

    init: function (type) {

        this.type = type;
    },

    eat: function () {

        alert("You ate " + this.type);
    }

}

food.init("Egg");
food.eat();

//const is used to create variables but we can't change the const variable later.
