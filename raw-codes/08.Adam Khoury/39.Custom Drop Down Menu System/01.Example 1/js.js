var ma = ["dropmenu1", "dropmenu2", "dropmenu3"];

function dropMenu(x) {


    for (m in ma) {

        if (ma[m] != x) {//This line means ma[m] element is not equal to the current element hide all other elements exepect the current element.

            document.getElementById(ma[m]).style.display = "none";
        }

        if (document.getElementById(x).style.display = "block") {

           fadeIn(x);

        } else {

            fadeOut(x);
        }

    }
}
