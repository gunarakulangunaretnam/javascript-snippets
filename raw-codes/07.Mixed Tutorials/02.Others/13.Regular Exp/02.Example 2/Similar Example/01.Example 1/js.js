var students = ["Kuna", "kunagta@yahoo.com", "Joker", "Joker@gmail.com", "hacker", "hacker@yahoo.com"];

var reg = /@/;
var names = [];
var emails = [];

for (a = 0; a < students.length; a++) {

    if (students[a].match(reg)) {


        emails.push(students[a]);

    } else {

        names.push(students[a]);
    }

}

alert(emails);
alert(names);

