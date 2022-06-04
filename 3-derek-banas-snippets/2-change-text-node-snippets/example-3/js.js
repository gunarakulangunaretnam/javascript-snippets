function change(id,texts){
	
	var node=document.getElementById(id);
	node.removeChild(node.childNodes[0]);
	

   var newnode1=document.createElement("hr");
   node.appendChild(newnode1);

}


/*Notes

*This example remove the first element and replace with an hr tag.

*/