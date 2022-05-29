var dataAboutme={
	
	name:"Guna",
	age:19
}

function sayAboutme(lang1,lang2,lang3){
	
	document.write("My name is "+this.name+" and my age is "+this.age+" I know "+lang1+" "+lang2+" and "+lang3);
}


var programmingLanguages=["JavaScript","PhP","C++"];

sayAboutme.call(dataAboutme,programmingLanguages[0],programmingLanguages[1],programmingLanguages[2]);




/*

*Call method is used to call a specific function with
 an object values and with arguments values.

*In call method we have to pass arguments (paramers) values one by one.


*/
