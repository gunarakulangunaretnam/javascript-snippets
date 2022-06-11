## 41. JavaScript Inheritance Tutorial Object Oriented Class Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <script src="js.js"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
//Establish parent class.

function Parentclass() {

    this.parent_property_1 = "Hola";

    this.parentmethod1 = function parentmethod1(arg1) {

        return arg1 + " parentmethod_1 returns data..";
    }

}

//Establish child class.

function Childclass() {

    this.child_property_1 = "Adios";

    this.childmethod1 = function childmethod1(arg1) {

        return arg1 + " child method returns data...";

    }
}

//Make the Childclass inherit all of the parent characeristics by using the prototype property.

Childclass.prototype = new Parentclass();

//Creates a new instance of Childclass.

var instance1 = new Childclass();

//Checks to see if instance1 is an instance of both object.

alert(instance1 instanceof Parentclass);
alert(instance1 instanceof Childclass);
```

### Output

![Banner Image](github-content/example-40-0-output.png/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <script src="js.js"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
//Establish parent class.

function Parentclass() {

    this.parent_property_1 = "Hola";

    this.parentmethod1 = function parentmethod1(arg1) {

        return arg1 + " parentmethod_1 returns data..";
    }

}

//Establish child class.

function Childclass() {

    this.child_property_1 = "Adios";

    this.childmethod1 = function childmethod1(arg1) {

        return arg1 + " child method returns data...";

    }
}

//Make the Childclass inherit all of the parent characeristics by using the prototype property.

Childclass.prototype = new Parentclass();

//Creates a new instance of Childclass.

var instance1 = new Childclass();

//Access the instance method and properties.

alert(instance1.parentmethod1("Result:- "));
alert(instance1.childmethod1("Result:- "));
alert(instance1.parent_property_1);
alert(instance1.child_property_1);
```

### Output

![Banner Image](github-content/example-40-1-output.gif/)

### Example 2

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <script src="js.js"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
//Establish parent class.

function Parentclass() {

    this.parent_property_1 = "Hola";

    this.parentmethod1 = function parentmethod1(arg1) {

        return arg1 + " parentmethod_1 returns data..";
    }

}

//Establish child class.

function Childclass() {

    this.child_property_1 = "Adios";

    this.childmethod1 = function childmethod1(arg1) {

        return arg1 + " child method returns data...";

    }
}

//Make the Childclass inherit all of the parent characeristics by using the prototype property.

Childclass.prototype = new Parentclass();

//Creates a new instance of Childclass.

var instance1 = new Childclass();


//Override parentmethod1 in the Childclass.

Childclass.prototype.parent_property_1 = function (arg1) {

    return arg1 + " I have overriden parentmethod1";

}

alert(instance1.parent_property_1("Result:-"));
```

### Output

![Banner Image](github-content/example-40-2-output.png/)

## 42. Monthly Payment Loan Calculator Programming Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <p>Loan Amount:$ <input type="number" id="amount" min="1" max="1000000" onchange="computeLoan()" /></p>
    <p>Interest Rate <input type="number" id="interest_rate" min="0" max="100" value="10" step=".1" onchange="computeLoan()" /></p>
    <p><input type="number" id="months" min="1" max="72" value="1" step="1"  onchange="computeLoan()" /> </p>

    <h1 id="payment"></h1>
    <script src="js.js"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
function computeLoan() {

    var amount = document.getElementById("amount").value;
    var interest_rate = document.getElementById("interest_rate").value;
    var months = document.getElementById("months").value;

    var interest = (amount * (interest_rate * .01)) / months;//.01 /It is moves decimal point two places left.
    var payment = ((amount / months) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("payment").innerHTML ="Monthly Payment $"+ payment;

}
```

### Output

![Banner Image](github-content/example-41-0-output.gif/)

## 43. Load Dynamic Content Into Page When User Reaches Bottom Ajax Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body>

    <div id="status">0 | 0</div>

    <div id="wrap"><img src="img1.jpg" /></div>

    <script src="js.js"></script>

</body>

</html>
```

#### CSS

```CSS
div#wrap {

    width:800px;
    margin:0 auto;  /*This is the way to center any div in web page */
}
div#status {

    position:fixed;
    font-size:24px;

}
div.newData {
    width:800px;
    height:1500px;
    background-color:red;

}
```

#### JavaScript

```JavaScript
window.onscroll = yHandler;

function yHandler() {

    var wrap = document.getElementById("wrap");
    var contentHeight = wrap.offsetHeight; //Gets page content height.
    var yOffset = window.pageYOffset//Get vertical scroll position.
    var y = yOffset + window.innerHeight;//If we want to target the bottom of the page we have to pageYOffset shows how much it scrolls

    if (y >= contentHeight) {

        wrap.innerHTML += "<div class='newData'></div>";//why i put += sign the reson is if i only put = sign it will override the content.but it keeps data already in that div and add more.

        //Ajax call to get more dynamic data goes here.
    }

    var status = document.getElementById("status");
    status.innerHTML = contentHeight + " | " + y;

}
```

### Output

![Banner Image](github-content/example-42-0-output.png/)

## 44. Setattribute Remove Attribute  Methods Snippets

### Example 0

#### HTML

```HTML

```

#### CSS

```CSS

```

#### JavaScript

```JavaScript

```

### Output

![Banner Image](github-content/example-0-output.gif/)
