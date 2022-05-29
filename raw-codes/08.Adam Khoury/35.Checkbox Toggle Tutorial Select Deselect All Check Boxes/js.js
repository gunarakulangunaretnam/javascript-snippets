function toggleAllCheckBoxes(master,cn) {

    var cArray = document.getElementsByClassName(cn);

    for (i = 0; i < cArray.length; i++) {

        var cb = document.getElementById(cArray[i].id);
        cb.checked = master.checked;

    }


}