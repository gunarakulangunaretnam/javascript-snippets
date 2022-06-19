function FullName(fname){
	
	this.fname=fname;
	
	this.fun1=function(){
		
		return "The Firstname is "+this.fname;
	}
}

FullName.prototype.lname="Hacker";



FullName.prototype.fun2=function(){
	
	
	return "The Full name is "+this.fname+" "+this.lname;
	
	
}

var kuna=new FullName("Joker");

alert(kuna.fun2());

