function puls1(val){

    if (Array.isArray(val)) {


        var newArr = [];

        for (i = 0; i < val.length; i++) {

            newArr[i] = val[i] + 1;
        }

        return newArr;
    } else {

        return val + 1;
    }
}


alert(puls1(2));