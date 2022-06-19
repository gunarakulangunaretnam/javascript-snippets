function showName(fname,lname){
    
    var start="My name is ";
    
       function makeFullName(){
           
           return start+" "+fname+" "+lname;
           
       }
    
    
    return makeFullName();
    
}

alert(showName("Joker","hacker"));

//No parameters were passed to the makeFullName function yet
//it was able to print the name accurately.
//The function keyword is been use to define the enclosure.