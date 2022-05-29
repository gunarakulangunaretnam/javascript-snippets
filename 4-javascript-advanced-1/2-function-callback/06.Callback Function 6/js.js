function mainFun(fun1, fun2, fun3, fun4) {

    alert("This is mainFuntion");
    fun1(fun2, fun3, fun4);

}

function ani1(fun2,fun3,fun4) {

    alert("This is funtion 1");
    fun2(fun3, fun4);

}

function ani2(fun3,fun4) {

    alert("This is function 2");

    fun3(fun4);
}

function ani3(fun4) {

    alert("This is function 3");
    fun4();
}

function ani4() {

    alert("This is function 4");
}

mainFun(ani1, ani2, ani3, ani4);