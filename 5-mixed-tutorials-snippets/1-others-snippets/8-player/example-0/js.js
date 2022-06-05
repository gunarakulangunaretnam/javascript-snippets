var Players=function(name,hitpoints,strenth){
	
	this.name=name;
	this.hitpoints=hitpoints;
	this.strenth=strenth;

}

var arrplayers=[];

Players.prototype.printPlayer=function(){
	
	var html="The Player name is <br>"+this.name+" The Hitpoints is <br>"+this.hitpoints+" The strenth is <br>"+this.strenth+"<hr>";
	
	return html;
	
}

var player1=new Players("Kuna",1000,20);
arrplayers.push(player1);

var player2=new Players("Joker",5000,300);
arrplayers.push(player2);

var player3=new Players("Hacker",10000,1000);
arrplayers.push(player3);


window.onload=function(){
	
	var printer=document.getElementById("printCon");
	
	for(q in arrplayers){
		
		var myDiv=document.createElement("div");
		myDiv.innerHTML=arrplayers[q].printPlayer();
		printer.appendChild(myDiv);
		
	}
	
}
