var dom = (function () {

    var _counter = 0;//It's hidden.It is priviate.


    return {


        genarateId: function () {

            return "customId" + this._counter++;


        },

        create: function (tagName, id) {

            var ele = document.createElement(tagName);
            ele.id = id || this.genarateId();


            return ele;
        }

    }


})();


var div1 = dom.create("div", "kuna")
div1.style.width = 250 + "px";
div1.style.height = 250 + "px";
div1.style.backgroundColor = "red";
document.body.appendChild(div1);

var div2 = dom.create("div")
div2.style.width = "250px";
div2.style.height = "250px";
div2.style.backgroundColor = "green";
document.body.appendChild(div2);


//But in this code _counter cannot be accesed because it's protacted.