//Establish the player class-bashed object.

function Player() {

    this.name;
    this.hitpoints = 100;
    this.attack = function (opponent) {

        opponent.hitpoints -= 10;
        alert(this.name + " just hit " + opponent.name);

    }

    
}



//Create two new separate Player instances

var p1 = new Player();
var p2 = new Player();


//Name the players

p1.name = "Conan"
p2.name = "Hercules";

//Make the player1 attack player2.
p1.attack(p2);

alert(p2.name + " has " + p2.hitpoints + " hit points left");


//Add a heal method to the player object using the prototype property.


Player.prototype.heal = function (targetPlayer) {

    targetPlayer.hitpoints+=5;


}

p1.heal(p2);

alert(p2.name + " has " + p2.hitpoints + " hit points left");
alert(p1.name + " has " + p1.hitpoints + " hit points left");

//add an energy prototype to the Player object using prototype property.

Player.prototype.energy = 200;

alert("Player 1 " + p1.energy);
alert("Player 2 " + p2.energy);





