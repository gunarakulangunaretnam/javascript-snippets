window.onload=function(){
	
	document.getElementById("submit").onclick=validation;
	
}

function validation(){
	
	
	var spans=document.getElementsByTagName("span");
	
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var phone=document.getElementById("phone").value;
	
	
	if(fname==""){
		
		spans[0].style.visibility="visible";
		
	}else{
		
		spans[0].style.visibility="hidden";
		
	}
	
	if(lname==""){
		
		spans[1].style.visibility="visible";
		
	}else{
		
		spans[1].style.visibility="hidden";
		
	}
	
	var ref=/\D/gi;
	
	if(phone==""){
		
		spans[2].style.visibility="visible";
		
		
	}else if(phone.match(ref)){
		
		spans[2].innerHTML="You must enter a numberic value";
		spans[2].style.color="lightgreen";
		spans[2].style.visibility="visible";		
	}
	else{
		
		spans[2].style.visibility="hidden";
		
	}
	
	var gens=document.getElementsByName("gen");
	var genNum=0;
	
	for(q=0;q<gens.length;q++){
		
		if(gens[q].checked){
			
			genNum++;
			
		}
		
	}
	
	if(genNum==1){
		
		spans[3].style.visibility="hidden";
		
	}else{
		
		spans[3].style.visibility="visible";
		
	}
	
	
}