function fun() {

  
    function subFun() {


        document.body.style.backgroundColor = "red";
    }
    

    subFun();

    fun = function () {

        document.body.style.backgroundColor = "yellow";

    }
}

fun();
fun();