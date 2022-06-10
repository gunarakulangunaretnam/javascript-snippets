function clean(e) {

    var texts = document.getElementById(e);
    var regExp = /[^a-z 0-9?!.,]/ig;//This line of code means we want to raplace everyting that is not these Characters.
    texts.value = texts.value.replace(regExp, "");

}