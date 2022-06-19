var dom = {

    _counter: 0,

    genetateId: function () {//It cretes an id every time when this function works.

        return "customId" + this._counter++;//increments

    },
    create: function (tagName,id) {


        ele = document.createElement(tagName);

        ele.id = id || this.genetateId();


        return ele;
    }

}

var div1 = dom.create("div", "kuna")//It creates a div element with kuna id.But if you omit the id value.the genarateId() function will run and it will automatically creates id.
div1.style.width = 250+"px";
div1.style.height = 250+"px";
div1.style.backgroundColor = "red";
document.body.appendChild(div1);

var div2 = dom.create("div")//It creates a div element with gebarateId function the id would be customId0.
div2.style.width = "250px";
div2.style.height = "250px";
div2.style.backgroundColor = "green";
document.body.appendChild(div2);


//In this program we can access the _counter property easily and it's easy to hack.that is the bug in this program.





