### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>    

        <link rel="stylesheet" type="text/css" href="style.css">
        <meta charset="utf-8">

    </head>

<body>

    <input type="text" id="txt1" />

    <button id="valid">Validate</button>

    <h1 id="dis"></h1>

    <script src="js.js" type="text/javascript"></script>

</body>      

</html>
```

#### JavaScript

```JavaScript
window.onload = function () {

    document.getElementById("valid").onclick = fun;
}

function fun() {

    var inp = document.getElementById("txt1").value;
    var dis = document.getElementById("dis");

    try {

        if (inp == "") throw "Empty";
        if (isNaN(inp)) throw "String";
        if (inp>0&&inp<10) throw "ok";
        if (inp > 10) throw "Over";

    } catch (err) {

        dis.innerHTML = "The input is " + err;
    }
}
````

### Output

![Banner Image](github-content/example-0-output.gif/)
