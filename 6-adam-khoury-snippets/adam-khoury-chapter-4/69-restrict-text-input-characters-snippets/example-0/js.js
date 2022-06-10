function letteronly(inputs) {

    var regExps = /[^a-z]/gi;//This line of code means we want to raplace everyting that is not these Characters.
    inputs.value = inputs.value.replace(regExps, "");


}