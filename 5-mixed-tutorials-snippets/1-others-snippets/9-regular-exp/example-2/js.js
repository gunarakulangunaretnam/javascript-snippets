var students = ["Kuna", "kunagta@yahoo.com", "Joker", "Joker@gmail.com", "hacker", "hacker@yahoo.com"];

var names = [];
var emails = [];

for (a = 0; a < students.length; a++) {

    var result = students[a].search(/@/);

    if (result == -1) {


        names.push(students[a]);
		
    } else {

        emails.push(students[a]);
    }
    
    }

alert(emails);
alert(names);

