var arr = ["A", "B", "C", "D", "E", "F", "G", "H"];

var dev = document.getElementById("dev");

var i = arr.length, j, temp;

while (--i > 0) {

    dev.innerHTML += "Affecting index position '+ "+i+" +' of the array";
    dev.innerHTML += "--- generate a random number between 0 and " + i;
    j = Math.floor(Math.random() * (i + 1));//Get random number ranging between 0 and (i+1).
    dev.innerHTML += "---generated: " + j;
    dev.innerHTML += "---Swap values found at index " + i + " and index " + j + " <br> ";
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;


}


document.write(arr);
