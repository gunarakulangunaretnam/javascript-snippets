var names = ["Joker", "Hacker", "Maker", "Kuna", "Rakulan"];

function forSub(currentValue,index,array){
	
	
	document.write("["+index+"] ="+currentValue+"<br>");
}

names.forEach(forSub);


/*Notes

*The forEach() method calls a provided function once for each element in an array, in order.

You can do it like this

names.forEach(function(currentValue,index,array){
	
	document.write("["+index+"] ="+currentValue+"<br>");
})

*/