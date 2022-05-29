var animals = [

    { name: "gime", species: "dog" },
     { name: "juni", species: "dog" },
      { name: "kiun", species: "dog" },
       { name: "linkeer", species: "rabbit" },
        { name: "gta", species: "fiscath" },
         { name: "gta", species: "rabbit" },


]




var names = [];


for (i = 0; i < animals.length; i++) {

    names.push(animals[i].name);

};
document.write(names);


