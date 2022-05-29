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

