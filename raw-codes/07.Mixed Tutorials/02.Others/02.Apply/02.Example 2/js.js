var dataAboutme={
	
	name:"Guna",
	age:19
}

function sayAboutme(lang1,lang2,lang3){
	
	document.write("My name is "+this.name+" and my age is "+this.age+" I know "+lang1+" "+lang2+" and "+lang3);
	
}

var programmingLanguages=["JavaScript","PhP","Java"];

sayAboutme.apply(dataAboutme,programmingLanguages);


/*

*apply calls a specific function with an object values
 and with an array values.
 .
 
 *In call method we have to pass arguments (paramers) values one by one.
  But in apply method we can pass arguments values in array formet.
  This is the differences between call() and apply().
  
 
 
 

*/
