function fun(a,b) {

    return function () {

       return a+b
    }
   
}

var a = fun(10, 2);
alert(a());