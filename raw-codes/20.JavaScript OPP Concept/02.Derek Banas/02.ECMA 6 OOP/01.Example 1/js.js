var addStuff = {//This is stayable ECMA virsion Script.

    sum: function (num1, num2) {

        return num1 + num2;

    }
};

document.write("This is Stayable ECMA Script "+addStuff.sum(10, 2)+"<br>");


var addStuff = {//This is ECMA 6 Script.

    sum(num1, num2) {

        return num1 + num2;

    }
}

document.write("This is ECMA 6 Script " + addStuff.sum(10, 2) + "<br>");