## 21. WYSIWYG Rich Text HTML Editor Text Area Replacement for Web Site Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

    <head>

        <title>This is the title</title>

        <link rel="stylesheet" type="text/css" href="style.css">

    </head>

<body onload="iFrameOn();">

    <h2>My web application that intakes data from users</h2>

    <form action="myFile.php" name="myform" id="myform" method="post">

        <p>
            Entry Titile<br />

            <div id="wysiwyg_cp" style="padding:8px;width:700px;">

                <input type="button" onclick="iBold()" value="B" />
                <input type="button" onclick="iUnderline()" value="U" />
                <input type="button" onclick="iItalic()" value="I" />
                <input type="button" onclick="iFontSize()" value="Text Size" />
                <input type="button" onclick="iFontColor()" value="Text Color" />
                <input type="button" onclick="iHorizontalRule()" value="HR" />
                <input type="button" onclick="iUnorderedList()" value="UL" />
                <input type="button" onclick="iOrderedList()" value="OL" />
                <input type="button" onclick="iLink()" value="Link" />
                <input type="button" onclick="iUnLink()" value="UnLink" />
                <input type="button" onclick="iImage()" value="Image" />

            </div>

            <input type="text" name="title" id="title" size="80" maxlength="80" />
        </p>
        <p>Entry Titile<br /><textarea style="display:none;" name="myTextArea" id="myTextArea" cols="100" rows="15"></textarea></p>.

        <iframe name="richTextField" id="richTextField" style="border:#000000 1px solid;width:700px;height:300px"></iframe>
        <br />

        <input type="button" value="Submit Data" name="myBtn" onclick="javascript:submit_form();" />

    </form>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
function iFrameOn() {

    document.richTextField.document.designMode = 'on';
}

function iBold() {

    document.richTextField.document.execCommand('bold', false, null);

}
function iUnderline() {

    richTextField.document.execCommand('underline', false, null);
}

function iItalic() {

    document.richTextField.document.execCommand("italic", false, null);
}

function iFontSize() {

    var size = prompt("Enter Text Size 1-7", "");
    richTextField.document.execCommand("FontSize", false, size);

}

function iFontColor() {

    var color = prompt("Enter Text Color", '');
    document.richTextField.document.execCommand("ForeColor", false, color);
}

function iHorizontalRule() {

    richTextField.document.execCommand("inserthorizontalrule", false, null);
}

function iUnorderedList() {

    document.richTextField.document.execCommand("insertunorderedlist",false,"newUL")
}

function iOrderedList() {

  richTextField.document.execCommand("insertorderedlist", false, "newOL")
}

function iLink() {

    var linkURL = prompt("Enter the URL or this link", 'http://');
    document.richTextField.document.execCommand("createlink", false, linkURL);
}

function iUnLink() {

    richTextField.document.execCommand("unlink", false, null);

}

function iImage() {

    var img = prompt("Enter a image location", '');

    if (img != null) {

        document.richTextField.document.execCommand("insertimage", false, img);
    }

}

function submit_form() {

    var theForm = document.getElementById("myform");
    theForm.elements['myTextArea'].value = window.frames['richTextField'].document.body.innerHTML;
    theForm.submit();

}

/*
*execCommand notes are in a image file.
*execCommand doesn't care about case we can use lowercase or uppercase.
*in some places i used  document.richTextField.document.execCommand this is same as  richTextField.document.execCommand.
 becasue document is default .
*/
```

### Output

![Banner Image](github-content/example-20-0-output.png/)

## 22. How to Detect User Browser Snippets

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

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
var ba = ["Chrome", "Firefox", "Safari", "Opera", "MSIE", "Trident","Edge"];

var userA=navigator.userAgent;

var bName;

for (a = 0;a< ba.length; a++) {

    if (userA.indexOf(ba[a]) > -1) {

        bName = ba[a];
        break;
    }

}

if (bName == "MSIE" || bName == "Trident" || bName == "Edge") {

    alert("You are using "+bname+" Browser")
}

alert("You are Using "+bName+" Browser");
```

### Output

![Banner Image](github-content/example-21-0-output.png/)

## 23. How to Program Code Syntax Highlighter Snippets

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

    <h2>Code Example</h2>

    <code>
        &lt;script&gt;

        /* Create a String object variale */

        var name="JokerHacker";

        &lt;/script&gt;

        &lt;h2 id="dis"&gt;Welcome to the website&lt;/h2&gt;

        &lt;p&gt;This JokerHacker &lt;/p&gt;

    </code>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
code {

    display:block;
    white-space:pre-wrap;
    border:1px solid #000;
    padding:10px;
    line-height:1.5em;
    font-family:'Lucida Console',monaco,monospace;
}
.bulet {

    color:#f90;
}

.qoutation {


    color:green;
}

.cammand {

    color:gray;

}
```

#### JavaScript

```JavaScript
window.addEventListener("load", syntaxHilighter);

function syntaxHilighter() {

    var ca = document.getElementsByTagName("code");

    for (i = 0; i < ca.length; i++) {

        var data = ca[i].innerHTML;

        data = data.replace(/"(.*?)"/g, '<span class="qoutation">&quot;$1&quot;</span>');
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="bulet">&lt;$1&gt;</span>');
        data=data.replace(/\/\* (.*?) *\//g,'<span class="cammand">/*$1*/</span>')

	  ca[i].innerHTML = data;

    }

}

/*

*(.*?) This means everything inside.
* $1 This also means everything inside.
*/
```

### Output

![Banner Image](github-content/example-22-0-output.png/)

## 24. Image Cycle JavaScript HTML CSS Web Snippets

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

    <div id="item_container"></div>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
.item {

    float:left;
    border:#aaa 1px solid;
    padding:10px;
    margin:10px;

}

.item >img {

 width:180px;
 height:140px;
 border:#666 1px solid;
 cursor:pointer;

}
.item >span {

display:block;
text-align:center;
margin-top:10px;

}
```

#### JavaScript

```JavaScript
window.addEventListener("load", function () {

    var items_container = document.getElementById("item_container");
    var thumbtimer, ti = 0; dir = "images/";

    var obj1 = { name: "Image 1", pics: ['img1.jpg', 'img2.jpg', 'img3.jpg'] };//This is JSON Object.
    var obj2 = { name: "Image 2", pics: ['img4.jpg', 'img5.jpg', 'img6.jpg'] };//This is JSON Object.
    var obj3 = { name: "Image 3", pics: ['img7.jpg', 'img8.jpg', 'img9.jpg'] };//This is JSON Object.

    var arr = [obj1, obj2, obj3];//I stored the JSON Objects in an array.

    for (i = 0; i < arr.length; i++) {//This for loop runs 3 times.

        var div = document.createElement("div");//each time runs it creates a div element.
        var img = document.createElement("img");//each time runs it creates a img element.
        var span = document.createElement("span");//each time runs it creates a span element.

        div.className = "item";//I have given the .item style to the div.

        img.oi = i;//I have created an attribute in the image element and i have set the value bashed on looping iteration value.
        img.src = dir + arr[i].pics[0];//I have set the first image as default. it works like img.src=images/arr['The iteration value 0 or 1 or 2'].pics[0] first image.
        span.innerHTML = arr[i].name;//I have get the name.It works like arr['The iteration value 0 or 1 or 2'].name and store to the span element.
        items_container.appendChild(div);//it appends the div element into the items_container for each time when the loop runs.
        div.appendChild(img);//it appends the img element into the div for each time when the loop runs.
        div.appendChild(span);//it appends the span element into the div for each time when the loop runs.

        img.addEventListener("mouseover", function (event) {//This function runs when the user mouse over the img element.

            thumbtimer = setInterval(function () {

                ti++;//It increments the value every 700 milli seconds one by one
                if (ti == arr[event.target.oi].pics.length) {//It means ti is equal to the arr[img.oi 'it is the iteration value 0 or 1 or 2''].pics.length and set the ti to 0.

                    ti = 0;

                }

                event.target.src = dir + arr[event.target.oi].pics[ti];//it means changes the image every 700 milli seconds.

            }, 700)//I have set the time as 700 milli seconds

        });

        img.addEventListener("mouseout", function () {//This function works when  the user mouse leave form the image element.


                clearInterval(thumbtimer);//it stops the thumbtimer setInterval method.
                ti = 0;//Then change the ti value to 0.
                event.target.src = dir + arr[event.target.oi].pics[ti];//After change the first image.

        })
        }
});
```

### Output

![Banner Image](github-content/example-23-0-output.gif/)

## 25. In Place Editing CMS Development Snippets

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

    <h2 style="color:red"> click two time on the text for edit the content</h2>

    <div ondblclick="makeEditable(this)" onblur="makesave(this)">

        My name is JokerHacker I'm going to hack your system

    </div>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
function makeEditable(div) {

    div.style.border = "1px solid #000";
    div.style.padding = "20px";
    div.contentEditable = true;
}

function makesave(div) {

    div.style.border = "none";
    div.style.padding = "0";
    div.contentEditable = false;
}
```

### Output

![Banner Image](github-content/example-24-0-output.png/)

## 26. Animation Tutorial HTML CSS Transform Rotate Snippets

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

    <img id="img1" src="img1.jpg" />

    <h3 style="position:relative;top:50px;" id="dis"></h3>

    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
window.addEventListener("load", rotateAnimation("img1", 20));

var degrees = 0;
var looper;

function rotateAnimation(ele, speed) {

    elem = document.getElementById(ele);

    if (navigator.userAgent.match("Chrome")) {

        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";

    } else if (navigator.userAgent.match("Firefox")) {

        elem.style.MozTransform = "rotate(" + degrees + "deg)";

    } else if (navigator.userAgent.match("MSIE")) {

        ele.style.MsTransform = "rotate(" + degrees + "deg)";

    } else if (navigator.userAgent.match("Opera")) {

        ele.style.MsTransform = "rotate(" + degrees + "deg)";

    } else {

        ele.style.transform = "rotate(" + degrees + "deg)";

    }

    looper = setTimeout('rotateAnimation(\'' + ele + '\',' + speed + ')', speed);

    degrees++;

    if (degrees > 359) {

        degrees = 1;
    }

    document.getElementById("dis").innerHTML = "rotate(" + degrees + "deg)";
}

/*
 *for reverse rotatation
   degrees--;
    if (degrees < -359) {
        degrees = -1;
    }
*/
```

### Output

![Banner Image](github-content/example-25-0-output.gif/)
