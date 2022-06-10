function doSomething() {// We dont have to paramenters it will still work fine.    

   
   alert(typeof arguments);
   alert(arguments.constructor);
   
}


doSomething("Joker","Hacker","Gta","maker",100,true);//We can add a thousand of arguments.

//It's an object object.It's not an array.
