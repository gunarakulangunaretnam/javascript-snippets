function add(x, y) {

    if ((typeof x && typeof y) !== 'number') {

        throw new Error("Prams Must be a number");
    }
}


add(2,2);