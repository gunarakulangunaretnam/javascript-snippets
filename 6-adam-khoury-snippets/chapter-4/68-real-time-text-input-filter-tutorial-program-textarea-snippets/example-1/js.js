function clean(e) {

    var texts = document.getElementById(e);
    var regExp = /[^a-z]/ig;//This line of code means we want to raplace everyting that is not these charactors.
    texts.value = texts.value.replace(regExp, "");

}