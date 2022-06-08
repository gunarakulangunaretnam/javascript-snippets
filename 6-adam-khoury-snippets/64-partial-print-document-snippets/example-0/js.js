function printContent(ele) {

    var restorepage = document.body.innerHTML//This will allow to pack everthing whithin the body element to the restorepage variable.
    var printContent = document.getElementById(ele).innerHTML;
    document.body.innerHTML = printContent;//We take the document.body.innerHTML and made it eqaul to only printContent.This means document.body.innerHTML only eqaul to printContent.
    window.print();//Then we run the print method if we only run window.print() method it will allow to print the whole document.
    document.body.innerHTML = restorepage;//after the printing i restored the the original HTML.

}