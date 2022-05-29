function dude() {

    var table = document.getElementsByTagName("table")[0];
    var th = document.getElementById("tableHead");
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");

    table.className = "dudeTable";
    th.className = "dudeHead";
    item1.className = "dudeImages";
    item2.className = "dudeImages";


}

function chick() {

    var table = document.getElementsByTagName("table")[0];
    var th = document.getElementById("tableHead");
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");

    table.classList.add("chickTable");
    th.classList.add("chickHead");
    item1.classList.add("chickImages");
    item2.classList.add("chickImages");
 
}