function change(id,texts){
	
	var node=document.getElementById(id);
	
	while(node.firstChild){
		
		node.removeChild(node.firstChild);
		
	}
		
node.appendChild(document.createTextNode(texts));

node.style.color="red";
		
		
	
}

change();


/*Notes

*/