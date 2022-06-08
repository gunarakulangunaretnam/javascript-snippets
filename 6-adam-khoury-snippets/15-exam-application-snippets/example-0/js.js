var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [

    ["What is 10 + 4?", "12", "14", "16", "B"],
    ["What is 20 - 9?", "7", "13", "11", "C"],
    ["What is 7 x 3?", "21", "24", "25", "A"],
    ["What is 8 / 2?", "10", "2", "4", "C"]

]



function _(x) {

    return document.getElementById(x);


    /*
     This is function returns document.getElementByid() method as _().
     We can use _() function instead of document.getElementByid() method.
      
     */
}


window.addEventListener("load", renderQuestion, false);//This means once the all the html elements loads successfully then run the  renderQuestion() function.

function renderQuestion() {

    if (pos >= questions.length) {

        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";
        _("test_status").innerHTML = " The test is finished";
        pos = 0;
        correct = 0;

        return false; //This means once the test has been completed stop the renderQuestion() function.
    }

    test = _("test");

  
    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
	
	question=questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];

	test.innerHTML = "<h3>" + question + "</h3>"

	test.innerHTML += ' <input type="radio" name="choices" value="A" />' + chA + "<br>";// I put '+=' sign for incrementing the value.
	test.innerHTML += ' <input type="radio" name="choices" value="B" />' + chB + "<br>";// But if i put '=' sign ,the only the last element is going to bind up with it.
	test.innerHTML += ' <input type="radio" name="choices" value="C" />' + chC + "<br>";// 
	test.innerHTML += ' <button onclick="checkAnswer()">Submit Answer</button>';

    
	
	
	/*
	
     in line 44.that's goning to say Question 1 of 4.because i put "pos+1" for user understanding if i didn't put it, it will say Question 0 of 4.
	 in line 44 also questions.length means how many questions we have in the questions array.
	
	*/
}
function checkAnswer() {

    choices = document.getElementsByName("choices");

    for (i = 0; i < choices.length; i++) {

        if (choices[i].checked) {

            choice = choices[i].value;//The user answer is stored in the choice variable.
        }

    }

    if (choice == questions[pos][4]) {

        correct++; 
    }
    pos++;  //This changes the position which question we are on.We increment the position one by one when the user clicks the checkAnswer().
    renderQuestion()   //Then we run the renderQuestion() function again when the user clicks the checkAnswer() with a new pos value.
	
	/*
	in line 71 to 80 we have a for loop in the for loop we get the user answer.
	
	*/
}



