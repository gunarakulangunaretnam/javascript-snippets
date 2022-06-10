function _(id) {

    return document.getElementById(id);
}

var droppedIn = false;

function drag_start(event) {

    _("app_status").innerHTML = "Dragging the " + event.target.getAttribute('id'); // event.target.getAttribute('id') means it gets the target object id name; that is object 1,2 or 3. that you are clicking
    event.dataTransfer.dropEffect = "move";//This is the effect
    event.dataTransfer.setData("text", event.target.getAttribute('id'));//setData('text') is the name of the place you have to give the same name to the drop place for getData.the second returns the id as above.

    
}

function drag_enter(event) {

    _("app_status").innerHTML = "You are dropping over the " + event.target.getAttribute('id');// event.target.getAttribute('id') means it gets the target object id name; that is object 1,2 or 3. that you are clicking
}

function drag_leave(event) {

    _("app_status").innerHTML = "You left the " + event.target.getAttribute('id');// event.target.getAttribute('id') means it gets the target object id name; that is object 1,2 or 3. that you are clicking

}

function drag_drop(event) {
    event.preventDefault();  //Prevent undesirable default behavior while dropping.
    var elem_id = event.dataTransfer.getData("text");//getData is the place.Text is the name of the place.
    event.target.appendChild(_(elem_id));//
    _(elem_id).removeAttribute("draggable");//remove the draggable event. 
    _(elem_id).style.cursor = "default";//change the cursor as default.

    droppedIn = true;


}

function drag_end(event) {

    if (droppedIn == false) {

        _('app_status').innerHTML = "You left " + event.target.getAttribute('id') + " go";

    }


    droppedIn = false;
	
	/*
	This function tells if the user put down the object print out you left + event.target.getAttribute('id').
	
	*/
}

function readDropZone() {

    for (a = 0; a < _("drop_zone").children.length; a++) {

        alert(_('drop_zone').children[a].id + " is in the drop zone");

    }
        
/*
	This function  prints out the following object in drop_zone.
	
	*/
		
		
}


