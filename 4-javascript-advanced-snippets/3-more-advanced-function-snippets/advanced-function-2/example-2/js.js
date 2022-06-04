function fun(a,b) {

    return function () {

       return a+b
    }
   
}

alert(fun(10, 2)());