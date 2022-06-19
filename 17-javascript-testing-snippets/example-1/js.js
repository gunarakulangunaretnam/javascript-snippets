function add(x, y) {

    var result;

    if ((typeof x && typeof y) !== 'number') {

        throw new Error("Prams Must be a number");
    }

    result = x + y;

    if (parseInt(result) !== result) {//If the result is converted into intger then is not eqal to the result.It means It is not eqal to intger.

        result = parseFloat(result.toFixed(1));//To fixed it in 1 char.

    }

    return result
}


add(2, 2);

//Expect 2+5=5
//Expect error
//Expect 0.1 + 0.2 = 0.3