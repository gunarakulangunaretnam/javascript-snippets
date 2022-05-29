var planet={

id:35,
name:"kuna",

faction:{
	
	name:"Nex",
	factionId:2,
	notification:function(){
		
		document.write("Next alliance");
		
	}
	
},
cites:[
    {locationId:15,name:"Gladius"},
	{locationId:18,name:"chalybs"},
	{locationId:16,name:"Ensis"}
	

]	
	
}

planet.faction.notification();
document.write(planet.cites[1].name);

planet.name="gta"; //We can change the object properties

var z=planet;
document.write(z.name);  //We can assign an object to a variable

if(typeof planet.defense==="undefined"){
	
	planet.defense="Icon canon";
	
}

alert(planet.defense);


/*Notes

*We can change the object properties like in line 30.
*We can assign an object to a variable like in line 33.
*We can check and create an object property like in line 35.


*/
