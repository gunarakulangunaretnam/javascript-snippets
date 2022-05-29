window.onload = function () {

    var btns = document.getElementsByClassName('catbtn');

    var funArrs = [fun1, fun2,fun3,fun4];

    for (i = 0; i < btns.length; i++) {

        btns[i].onclick = funArrs[i];

    }
  

}

var imgsDetails = {

    img1: {

        name: "Joker 1",
        points:0
    },

    img2: {
        name: "Joker 2",
        points:0

    },

    img3: {

        name: "Joker 3",
        points:0
    },

    img4: {

        name: "Joker 4",
        points:0

    }

}

function fun1() {

    document.getElementById("disBox").innerHTML = "<img id='i1' src='img1.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img1.name;
    document.getElementById("point").innerHTML = imgsDetails.img1.points;
    

}

function fun2() {

    document.getElementById("disBox").innerHTML = "<img id='i2' src='img2.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img2.name;
    document.getElementById("point").innerHTML = imgsDetails.img2.points;

}

function fun3() {

    document.getElementById("disBox").innerHTML = "<img id='i3' src='img3.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img3.name;
    document.getElementById("point").innerHTML = imgsDetails.img3.points;

}

function fun4() {

    document.getElementById("disBox").innerHTML = "<img id='i4' src='img4.jpg'>";
    document.getElementById("name").innerHTML = imgsDetails.img4.name;
    document.getElementById("point").innerHTML = imgsDetails.img4.points;

}

document.getElementById("disBox").onclick = disBox;


function disBox() {

    if (document.getElementById("disBox").children[0].id == "i1") {

        document.getElementById("point").innerHTML = imgsDetails.img1.points++;

    } else if (document.getElementById("disBox").children[0].id == "i2") {

        document.getElementById("point").innerHTML = imgsDetails.img2.points = imgsDetails.img2.points + 1;


    } else if (document.getElementById("disBox").children[0].id == 'i3') {

        document.getElementById("point").innerHTML = imgsDetails.img3.points += 1;

    } else if (document.getElementById("disBox").children[0].id == 'i4') {

        document.getElementById("point").innerHTML = imgsDetails.img4.points++;
    }
}


document.getElementById("adminbtn").onclick = adminFun;

function adminFun() {


    
    document.getElementById('ab1').style.display = "block";
    document.getElementById('ab2').style.display = "block";
    document.getElementById('ab3').style.display = "block";
    document.getElementById('ab4').style.display = "block";

     document.getElementById('ab1').onclick = function () {

        document.getElementById('adname').innerHTML = imgsDetails.img1.name;
        document.getElementById('adpoints').innerHTML = imgsDetails.img1.points;

       
    
        var input0name = document.createElement("input");
        input0name.id = "input0name";
        input0name.placeholder = "Name";
        input0name.type = "text";

        document.getElementById("adminBox").appendChild(input0name);

        var input0point = document.createElement("input");
        input0point.type = "text";
        input0point.id = "input0point";
        input0point.placeholder = "Points";

        document.getElementById("adminBox").appendChild(input0point);


        var save0 = document.createElement("button");
        save0.innerHTML="Save";
        save0.id = "save0";

        document.getElementById("adminBox").appendChild(save0);


        var cancel0 = document.createElement("button");
        cancel0.id = "cancel0";
        cancel0.innerHTML = "Calcel";

        document.getElementById("adminBox").appendChild(cancel0);


        document.getElementById("save0").onclick = function () {

            var input0name=document.getElementById("input0name").value;
            var input0point=document.getElementById("input0point").value;


            if (input0name && input0point != "") {

                imgsDetails.img1.name = input0name;
                imgsDetails.img1.points = input0point;

                document.getElementById("input0name").style.display = "none";
                document.getElementById("input0point").style.display = "none";
                document.getElementById("cancel0").style.display = "none";
                document.getElementById("save0").style.display = "none";
            } else {

                alert("Please Enter Valid Value");
            }
        }

        document.getElementById("cancel0").onclick = function () {

            document.getElementById("input0name").style.display = "none";
            document.getElementById("input0point").style.display = "none";
            document.getElementById("save0").style.display = "none";
            document.getElementById("cancel0").style.display = "none";
        }


         

     }

     document.getElementById('ab2').onclick = function () {

         document.getElementById('adname').innerHTML = imgsDetails.img2.name;
         document.getElementById('adpoints').innerHTML = imgsDetails.img2.points;

         var input1name = document.createElement("input");
         input1name.id = "input1name";
         input1name.type = "text";
         input1name.placeholder = "Name";

         document.getElementById("adminBox").appendChild(input1name);


         var input1points = document.createElement("input");
         input1points.type = "text";
         input1points.id = 'input1points';
         input1points.placeholder = "Points";

         document.getElementById("adminBox").appendChild(input1points);

         var save1 = document.createElement("button");
         save1.id = "save1";
         save1.innerHTML = "Save";

         
         document.getElementById("adminBox").appendChild(save1);
        

         var cancel1 = document.createElement("button");
         cancel1.id = "cancel1";
         cancel1.innerHTML = "Cancel";

         document.getElementById("adminBox").appendChild(cancel1);

        

         document.getElementById("save1").onclick = function () {

             var input1name = document.getElementById("input1name").value;
             var input1points = document.getElementById("input1points").value;


             if (input1name && input1points != "") {

                 imgsDetails.img2.name = input1name;
                 imgsDetails.img2.points = input1points;

                 document.getElementById("input1name").style.display = "none";
                 document.getElementById("input1points").style.display = "none";
                 document.getElementById("cancel1").style.display = "none";
                 document.getElementById("save1").style.display = "none";

             } else {

                 alert("Please Enter Valid value");
             }
         }

         document.getElementById("cancel1").onclick = function () {

             document.getElementById("input1name").style.display = "none";
             document.getElementById("input1points").style.display = "none";
             document.getElementById("cancel1").style.display = "none";
             document.getElementById("save1").style.display = "none";
         }
        

     }


     document.getElementById('ab3').onclick = function () {

         document.getElementById('adname').innerHTML = imgsDetails.img3.name;
         document.getElementById('adpoints').innerHTML = imgsDetails.img3.points;


         var input2name = document.createElement("input");
         input2name.type = "text";
         input2name.id = "input2name";
         input2name.placeholder = "Name";

         document.getElementById("adminBox").appendChild(input2name);

         var input2point = document.createElement("input");
         input2point.type = "text";
         input2point.id = "input2point";
         input2name.placeholder = "Points";

         document.getElementById("adminBox").appendChild(input2point);

         var save2 = document.createElement("button");
         save2.id = "save2";
         save2.innerHTML = "Save";

         document.getElementById("adminBox").appendChild(save2);

         var cancel2 = document.createElement("button");
         cancel2.id = 'cancel2';
         cancel2.innerHTML = "Cancel";

         document.getElementById("adminBox").appendChild(cancel2);


         document.getElementById("save2").onclick = function () {

             var input2name = document.getElementById("input2name").value;
             var input2point = document.getElementById("input2point").value;

             if (input2name && input2point != "") {

                 imgsDetails.img3.name = input2name;
                 imgsDetails.img3.points = input2point;

                 document.getElementById("input2name").style.display = "none";
                 document.getElementById("input2point").style.display = "none";
                 document.getElementById("save2").style.display = "none";
                 document.getElementById("cancel2").style.display = "none";

             } else {

                 alert("Enter a valid value");
             }


         }


         document.getElementById("cancel2").onclick = function () {

             document.getElementById("input2name").style.display = "none";
             document.getElementById("input2point").style.display = "none";
             document.getElementById("save2").style.display = "none";
             document.getElementById("cancel2").style.display = "none";
         }
         
     }


     document.getElementById('ab4').onclick = function () {

         document.getElementById('adname').innerHTML = imgsDetails.img4.name;
         document.getElementById('adpoints').innerHTML = imgsDetails.img4.points;


         var input3name = document.createElement("input");
         input3name.type = "text";
         input3name.id = "input3name";
         input3name.placeholder = "Name";

         document.getElementById("adminBox").appendChild(input3name);

         var input3point = document.createElement("input");
         input3point.type = "text";
         input3point.id = "input3point";
         input3point.placeholder = "Point";

         document.getElementById("adminBox").appendChild(input3point);

         var save3 = document.createElement("button");
         save3.id = "save3";
         save3.innerHTML = "Save";

         document.getElementById("adminBox").appendChild(save3);


         var cancel3 = document.createElement("button");
         cancel3.id = "cancel3";
         cancel3.innerHTML = "Cancel";

         document.getElementById("adminBox").appendChild(cancel3);

         document.getElementById("save3").onclick = function () {

             var input3name = document.getElementById("input3name").value;
             var input3point = document.getElementById("input3point").value;

             if (input3name && input3point != "") {
                 
                 imgsDetails.img4.name = input3name;
                 imgsDetails.img4.points = input3point;

                 document.getElementById("input3name").style.display = "none";
                 document.getElementById("input3point").style.display = "none";
                 document.getElementById("save3").style.display = "none";
                 document.getElementById("cancel3").style.display = "none";


             }
         }


         document.getElementById("cancel3").onclick = function () {

             document.getElementById("input3name").style.display = "none";
             document.getElementById("input3point").style.display = "none";
             document.getElementById("save3").style.display = "none";
             document.getElementById("cancel3").style.display = "none";
            
         }


     }




}