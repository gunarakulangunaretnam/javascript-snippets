## JavaScript Testing Snippets

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
function add(x, y) {

    if ((typeof x && typeof y) !== 'number') {

        throw new Error("Prams Must be a number");
    }
}

add(2,2);
```

### Output

![Banner Image](github-content/example-0-output.png/)

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
function add(x, y) {

    var result;

    if ((typeof x && typeof y) !== 'number') {

        throw new Error("Prams Must be a number");
    }

    result = x + y;

    if (parseInt(result) !== result) {//If the result is converted into intger then is not eqal to the result.It means It is not eqal to intger.

        result = parseFloat(result.toFixed(1));//To fixed it in 1 char.

    }

    return result
}

add(2, 2);

//Expect 2+5=5
//Expect error
//Expect 0.1 + 0.2 = 0.3
```

### Output

![Banner Image](github-content/example-1-output.png/)
