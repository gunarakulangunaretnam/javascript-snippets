var people = [

    ["Joseph",27,"USA",["blue","black"]],
    ["Maria", 19, "Sri Lanka", ["green", "red"]],
    ["Brian",66,"India",["black","white"]],
    ["Susan", 15, "England",["Dark blue", "brown"]]

    
    ];




var a = 0;

while (a < people.length) {

    document.write("<h1> Person "+(a+1)+"</h1>")
   
    var d = 0;

    while (d < people[a].length) {

        document.write(people[a][d] + "<br>");
        d += 1;
    }
    a=a+1;
}

//Multidimensional Array is an array that contains another array.