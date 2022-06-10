function populate(s1, s2) {

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";

    if (s1.value == "Chevy") {

        var optionArr = ["|", "imbale|Imbale","moto|Moto","greter|Greter"]//I put the first one as empty.

    } else if (s1.value == "Dodge") {

        var optionArr = ["|", "m4568|M4568", "luvanda|Luvanda", "moter|Moter"]//I put the first one as empty.

    } else if (s1.value == "Ford") {

        var optionArr = ["|", "linker|Linker", "dodo|Dodo", "thus|Thus"]//I put the first one as empty.


    }


    for (op in optionArr) {

        var pair = optionArr[op].split("|");//This code splited by the pipe (|) and it returns two values like pair[0] and pair[1].
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
        


    }

}