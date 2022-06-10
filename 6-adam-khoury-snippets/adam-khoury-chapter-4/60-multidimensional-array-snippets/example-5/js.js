var people = [

    ["Joseph",27,"USA",["blue","black"]],
    ["Maria", 19, "Sri Lanka", ["green", "red"]],
    ["Brian",66,"India",["black","white"]],
    ["Susan", 15, "England",["Dark blue", "brown"]]

    
    ];



for (a = 0; a < people.length; a++) {

    document.write("<h1>Person "+(a+1)+"</h1>");


    for (details = 0; details < people[a].length; details = details+1) {

        document.write(people[a][details] + "<br>");

    }

}

//Multidimensional Array is an array that contains another array.