function fun(a,b) {

    return function () {

        alert(a + b);
    }
   
}

fun(10, 2)();