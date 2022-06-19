function Car(){
	
	this.carname="no name";
	
}

Car.prototype.setCarname=function(realCarname){
	
	if(realCarname!=undefined){
		
		this.carname=realCarname;
		
	}else{
		
		alert("Please enter a car name");
		
	}
}

Car.prototype.getCarname=function(){
	
	return this.carname;
	
}

var bmw=new Car();

bmw.setCarname("Bmw1698");

document.write(bmw.getCarname());


/*Notes

*We have created a constructor function.
*Then We inharited the value by prototype method.
*prototype is used to inharite the value.



*/
