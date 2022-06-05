## Form Validation Snippets

### Form 1

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <style>

		span{

		color:red;
		visibility:hidden;
		font-weight:bold;
		}

        </style>

    </head>

    <body>

	   <form>
	   <input type="text" id="fname" placeholder="Firstname:"><span>The Firstname is required</span><br>
	   <input type="text" id="lname" placeholder="Lastname:"><span>The Lastname is required</span><br>
	   <input type="text" id="phone" placeholder="Phone Number"><span>The Phone Number is required</span><br>
	   <label>Genter</label><br>
	   <input type="radio" name="gen">
	   <input type="radio" name="gen"><span>The Genter is required</span><br>

	   <input type="button" id="submit" value="validate">

</form>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
window.onload=function(){

	document.getElementById("submit").onclick=validation;

}

function validation(){


	var spans=document.getElementsByTagName("span");

	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var phone=document.getElementById("phone").value;


	if(fname==""){

		spans[0].style.visibility="visible";

	}else{

		spans[0].style.visibility="hidden";

	}

	if(lname==""){

		spans[1].style.visibility="visible";

	}else{

		spans[1].style.visibility="hidden";

	}

	var ref=/\D/gi;

	if(phone==""){

		spans[2].style.visibility="visible";


	}else if(phone.match(ref)){

		spans[2].innerHTML="You must enter a numberic value";
		spans[2].style.color="lightgreen";
		spans[2].style.visibility="visible";		
	}
	else{

		spans[2].style.visibility="hidden";

	}

	var gens=document.getElementsByName("gen");
	var genNum=0;

	for(q=0;q<gens.length;q++){

		if(gens[q].checked){

			genNum++;

		}

	}

	if(genNum==1){

		spans[3].style.visibility="hidden";

	}else{

		spans[3].style.visibility="visible";

	}

}
````

### Output

![Banner Image](github-content/example-1-0-output.png/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>Excrise</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <form>

        <input type="text" id="fname" placeholder="Firtname" /><span></span><br>
        <input type="text" id="lname" placeholder="Lastname" /><span></span><br>
        <input type="text" id="phone" placeholder="Phone Number" /><span></span><br>
        <label>Genter</label>
        <input type="radio" name="gen" />
        <input type="radio" name="gen" /><span></span>
        <br />
        <input type="button" id="submit" value="Submit" />
    </form>

    <script src="js.js"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
window.onload = function () {

    document.getElementById("submit").onclick = function () { formValidation() };

}

function formValidation() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phoneNumber = document.getElementById("phone").value;

    var dis = document.getElementsByTagName("span");

    if (isNaN(fname)) {

        dis[0].innerHTML = "";

    } else if (fname == "") {

        dis[0].innerHTML = "You have to Enter the firstname";
        dis[0].style.color = "red";

    } else {


        dis[0].innerHTML = "You must enter only string values";
        dis[0].style.color = "green";
    }


    if (lname == "") {

        dis[1].innerHTML = "You have to Enter the lastname";
        dis[1].style.color = "red";

    } else if (isNaN(lname)) {

        dis[1].innerHTML = "";

    } else {

        dis[1].innerHTML = "You must enter only string values";
        dis[1].style.color = "green";

    }


    if (phoneNumber == "") {

        dis[2].innerHTML = "You have to enter the Phone number";
        dis[2].style.color = "red";

    } else if(isNaN(phoneNumber)) {


        dis[2].innerHTML = "You must Enter only Numerical Values";
        dis[2].style.color = "green";


    }

    var genters = document.getElementsByName("gen");
    var i = 0;
    for (a = 0; a < genters.length; a++) {

        if (genters[a].checked) {

            i++;

        }

        if (i == 0) {

            dis[3].innerHTML = "You have to check your sex";
            dis[3].style.color = "red";

        } else {

            dis[3].innerHTML = "";

        }
    }
}
````

### Output

![Banner Image](github-content/example-1-1-output.gif/)

### Form 2

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

       <style>

	   </style>

    </head>

    <body>

	   <h1 id="h1"></h1>

	 <form>

	 <input type="text" id="fnum">
	 <input type="text" id="snum"><br>
	 <input type="button" id="submit" value="submit">

	 </form>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
window.onload=function(){

	document.getElementById("submit").onclick=function(){sub()};

}

function sub(){

	var fnum=document.getElementById("fnum").value;
	var snum=document.getElementById("snum").value;
	var errorText=document.getElementById("h1");

	if(fnum==""&&snum==""){

		errorText.innerHTML="You must enter values in two boxes";
		errorText.style.color="red";

	}else if(isNaN(fnum)||isNaN(snum)){

	errorText.innerHTML="You must Enter numberic values in two boxes";
	errorText.style.color="red";

	}
}
````

### Output

![Banner Image](github-content/example-2-0-output.gif/)

### Form 3

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

       <style>

	   </style>

    </head>

    <body>

	  <textarea id="txt1" col="5" rows="5"></textarea>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
window.onload=function(){

	document.getElementById("txt1").addEventListener("keydown",clearing);
	document.getElementById("txt1").addEventListener("keyup",clearing);

}

function clearing(){

	var textFiled=document.getElementById("txt1");
	var regExp=/fuck/gi;
    textFiled.value=textFiled.value.replace(regExp,"");

}

/*Notes

*This is real time text filtter.
*/
````

### Output

![Banner Image](github-content/example-3-0-output.gif/)

### Form 4

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

       <style>

	   </style>

    </head>

    <body>

	  <textarea id="txt1" col="5" rows="5"></textarea>

	<h1 id="display1"></h1>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
window.onload=function(){

	document.getElementById("txt1").addEventListener("keydown",clearing);
	document.getElementById("txt1").addEventListener("keyup",clearing);

}

function clearing(){

	var textFiled=document.getElementById("txt1");
	var regExp=/[^a-z 0-9]/gi;

	textFiled.value=textFiled.value.replace(regExp,"");

}

/*Notes

*This is program only allow [a-z,0-9];
*/
````

### Output

![Banner Image](github-content/example-4-0-output.png/)

### Form 5

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

       <style>

	   </style>

    </head>

    <body>

	  <textarea id="txt1" col="5" rows="5"></textarea>

	<h1 id="display1"></h1>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
window.onload=function(){

	document.getElementById("txt1").addEventListener("keydown",clearing);
	document.getElementById("txt1").addEventListener("keyup",clearing);

}

function clearing(){

	var textFiled=document.getElementById("txt1");
	var regExp=/[^a-z 0-9]/gi;

	if(textFiled.value.search(regExp)>-1){

		document.getElementById("display1").innerHTML="We only allow [a-z,0-9]";
		textFiled.value=textFiled.value.replace(regExp,"");
	}

}

/*Notes

*This is program only allow [a-z,0-9];

*/
````

### Output

![Banner Image](github-content/example-5-0-output.png/)
