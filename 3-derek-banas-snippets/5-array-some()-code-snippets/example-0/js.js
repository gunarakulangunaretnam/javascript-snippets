function someArr(arr, value) {

    for (a = 0; a < arr.length; a++) {

        if (arr[a] == value) {

            return true;
        } 

    }

    return false;

}

alert(someArr([1, 2, 3, 4, 5, 6], 1));
