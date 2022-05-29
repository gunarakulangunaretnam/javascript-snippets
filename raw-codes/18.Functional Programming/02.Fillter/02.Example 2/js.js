var animals = [

    { name: "gime", species: "dog" },
     { name: "juni", species: "dog" },
      { name: "kiun", species: "dog" },
       { name: "linkeer", species: "rabbit" },
        { name: "gta", species: "fiscath" },
         { name: "gta", species: "rabbit" },


]


var a=animals.filter(function (ani) {

 
    if (ani.species == "dog") {

        document.write(ani.name + "<br>");
    }

});


//filter returns a small array bashed on a logic but find returns the first item the single item.
//map,filter and find are all list transformation they turn your list into something else.


