## Local Storage Snippets

### Local Storage 1

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

		<h1 id="dis1"></h1>

        <h1 id="dis2"></h1>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
localStorage.fname="Kuna";
localStorage.lname="Rakulan";

document.write(localStorage.fname+" "+localStorage.lname);

/*Notes

*LocalStorage is like cookies.
*It is used to store some data locaily.

*/
````

### Output

![Banner Image](github-content/example-1-output.png)

### Local Storage 2

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

		<h1 id="dis1"></h1>

        <h1 id="dis2"></h1>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
localStorage.setItem("fname","Kuna");
localStorage.setItem("lname","Rakulan");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname"));

/*Notes

*We can use setItem and getItem methods to store or get data.

*/
````

### Output

![Banner Image](github-content/example-2-output.png/)

### Local Storage 3

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

		<h1 id="dis1"></h1>

        <h1 id="dis2"></h1>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
localStorage.setItem("fname","Kuna");
localStorage.setItem("lname","Rakulan");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");

localStorage.removeItem("fname");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");

/*Notes

*We can remove data by using removeItem method.

*/
````

### Output

![Banner Image](github-content/example-3-output.png/)

### Local Storage 4

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

		<h1 id="dis1"></h1>

        <h1 id="dis2"></h1>

          <script src="js.js"></script>

    </body>

</html>
```

#### JavaScript

```JavaScript
localStorage.setItem("fname","Kuna");
localStorage.setItem("lname","Rakulan");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");

localStorage.clear();

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");

/*Notes

*We can clear all data in the localStorage by using clear() method.

*/
````

### Output

![Banner Image](github-content/example-4-output.png/)
