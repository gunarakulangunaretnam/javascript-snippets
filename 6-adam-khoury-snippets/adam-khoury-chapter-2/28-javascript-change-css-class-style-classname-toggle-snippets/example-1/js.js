toggleClass = function (ele) {


    var kids = document.getElementById("menu1").children;

    for (i = 0; i < kids.length; i++) {

        kids[i].className = "class1";
    }

    ele.className = "class2";




}