var maxAmount=250;

function textCounter(textField,showCountFiled) {

    if (textField.value.length > maxAmount) {

        textField.value = textField.value.substring(0, maxAmount);//This line of code cuts everythig of more than 250.

    } else {

        showCountFiled.value = maxAmount - textField.value.length;


    }

   
}