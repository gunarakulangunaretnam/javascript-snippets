function doSomething() {

 
    var result = 0;

    for (i = 0; i < arguments.length; i++) {

        result += arguments[i];

    }

    return result;
    

}


alert(doSomething(10, 2, 35, 3));

