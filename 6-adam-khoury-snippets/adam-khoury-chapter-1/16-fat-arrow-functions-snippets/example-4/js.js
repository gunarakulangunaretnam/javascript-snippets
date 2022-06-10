function Car(){
	
	this.speed=0;
	
	setInterval(()=>{
		
		this.speed++;
		document.getElementById("dis").innerHTML=this.speed;
		
	},300)
	
}

var car1=new Car();