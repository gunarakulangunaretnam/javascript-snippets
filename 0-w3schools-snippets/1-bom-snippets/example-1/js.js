window.onload=function(){
	
  document.getElementById("open").onclick=openWins;
	
}

function openWins(){
	
	 var wins=document.getElementsByTagName("iframe");
	 
    for(a=0;a<wins.length;a++){
	
	wins[a].src="www.google.lk";
	
	
    }
}