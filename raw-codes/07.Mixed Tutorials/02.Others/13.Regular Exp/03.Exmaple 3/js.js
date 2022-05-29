var students = ["Kuna", "kunagta@yahoo.com", "Joker", "Joker@gmail.com", "hacker", "hacker@yahoo.com"];

var stuNames=[];

var errors=[];

for(i=0;i<students.length;i++){
	
	var regExp=students[i].search(/@/g);
	
	try{
		
		if(regExp==-1){
			
			stuNames.push(students[i]);
			
		}else{
			
			throw students[i]+" Is not a name";
		}
		
	}catch(err){
		
		var a=errors.push(err);
		
	}
	
}

alert("Names are "+stuNames);
document.write(errors+"<br>");