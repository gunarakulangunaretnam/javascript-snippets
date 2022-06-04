function fun() {

    return function () {
        return "This is Joker";
    }
}

var a=fun()();
alert(a);