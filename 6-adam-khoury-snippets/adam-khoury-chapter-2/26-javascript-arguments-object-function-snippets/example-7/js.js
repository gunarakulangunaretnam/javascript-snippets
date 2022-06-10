function doSomething() {// We dont have to paramenters it will still work fine.    

    arguments[0] = "Kuna";//We can also change arguments value like this.

    for (i = 0; i < arguments.length; i++) {

        alert(arguments[i]);

    }
}


doSomething("Joker","Hacker","Gta","maker",100,true);//We can add a thousand of arguments.

