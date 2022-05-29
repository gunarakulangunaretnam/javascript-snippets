window.onload=function(){
	
	document.getElementById("submit").onclick=function(){sub()};
	
}

function sub(){
	
	var fnum=document.getElementById("fnum").value;
	var snum=document.getElementById("snum").value;	
	var errorText=document.getElementById("h1");
	
	if(fnum==""&&snum==""){
		
		errorText.innerHTML="You must enter values in two boxes";
		errorText.style.color="red";
	
	}else if(isNaN(fnum)||isNaN(snum)){
		
	errorText.innerHTML="You must Enter numberic values in two boxes";
	errorText.style.color="red";
	
		
	}
}