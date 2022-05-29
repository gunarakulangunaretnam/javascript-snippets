function fun() {

    for (a = 0; arguments.length; a++) {

        arguments[a]();
    }
}


function fun1() {

    alert("This is functon 1");

}


function fun2() {

    alert("This is functon 2");

}


function fun3() {

    alert("This is functon 3");

}


fun(fun1, fun2, fun3, function () {

    alert("This is the last function");
})