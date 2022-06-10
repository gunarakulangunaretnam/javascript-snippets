function iFrameOn() {

    document.richTextField.document.designMode = 'on';
}

function iBold() {

    document.richTextField.document.execCommand('bold', false, null);

}

function iUnderline() {

    richTextField.document.execCommand('underline', false, null);
}

function iItalic() {


    document.richTextField.document.execCommand("italic", false, null);
}

function iFontSize() {

    var size = prompt("Enter Text Size 1-7", "");
    richTextField.document.execCommand("FontSize", false, size);


}

function iFontColor() {

    var color = prompt("Enter Text Color", '');
    document.richTextField.document.execCommand("ForeColor", false, color);
}

function iHorizontalRule() {

    richTextField.document.execCommand("inserthorizontalrule", false, null);
}

function iUnorderedList() {

    document.richTextField.document.execCommand("insertunorderedlist",false,"newUL")
}

function iOrderedList() {

  richTextField.document.execCommand("insertorderedlist", false, "newOL")
}

function iLink() {

    var linkURL = prompt("Enter the URL or this link", 'http://');
    document.richTextField.document.execCommand("createlink", false, linkURL);
}

function iUnLink() {

    richTextField.document.execCommand("unlink", false, null);

}

function iImage() {

    var img = prompt("Enter a image location", '');

    if (img != null) {

        document.richTextField.document.execCommand("insertimage", false, img);
    }

}

function submit_form() {

    var theForm = document.getElementById("myform");
    theForm.elements['myTextArea'].value = window.frames['richTextField'].document.body.innerHTML;
    theForm.submit();


}




/*

*execCommand notes are in a image file.
*execCommand doesn't care about case we can use lowercase or uppercase.
*in some places i used  document.richTextField.document.execCommand this is same as  richTextField.document.execCommand.
 becasue document is default .

*/