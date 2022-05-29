var animals = [

    { name: "gime", species: "dog" },
     { name: "juni", species: "dog" },
      { name: "kiun", species: "dog" },
       { name: "linkeer", species: "rabbit" },
        { name: "gta", species: "fiscath" },
         { name: "gta", species: "rabbit" },


]

var newArr = [];

for (a = 0; a < animals.length; a++) {

    if (animals[a].species == "dog") {

        newArr.push(animals[a]);
    }

    alert(newArr[a].name);
    
}

//It can be done by using fillter method.