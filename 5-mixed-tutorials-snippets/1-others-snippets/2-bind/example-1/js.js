var dataAboutme={
	
	name:"Guna",
	age:19
	
}

function sayAboutme(lang1,lang2,lang3){

   document.write("My name is "+this.name+" and my age is "+this.age+" I know "+lang1+" "+lang2+" "+lang3+"<br>");
	
	
}

var programmingLanguages=["JavaScript","PhP","C#","C++","Java","Python"];

var bound=sayAboutme.bind(dataAboutme);

bound(programmingLanguages[0],programmingLanguages[1],programmingLanguages[2]);
bound(programmingLanguages[3],programmingLanguages[4],programmingLanguages[5]);

/*Notes

*Bind calls a function with an object values.
*Bind is like call().But it returns a function back for later use.
*The bind() method returns a brand new  function for later use.
 We can use the brand new function many times with differnt values.

*/



