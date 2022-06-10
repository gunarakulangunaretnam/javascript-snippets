function rotateAnimation() {
    this.d = 0;

    this.animate = function animate(ele, dir) {

        var elem = document.getElementById(ele);
        var me = this;

        if (dir == "ccw") {

            this.d--;

        } else {

            this.d++;

        }

        elem.style.WebkitTransform = "rotate(" + this.d + "deg)";
        elem.style.MozTransform = "rotate(" + this.d + "deg)";
        elem.style.msTransform = "rotate(" + this.d + "deg)";
        elem.style.OTransform = "rotate(" + this.d + "deg)";
        elem.style.transform = "rotate(" + this.d + "deg)";


        if (this.d > 359) {

            this.d = 1;

        } else if (this.d < -359) {

            this.d = -1;

        }
  

        setTimeout(function () { me.animate(ele, dir); }, 20)//we can also  give rotateImg1.animate(ele, dir)
    }
}


var rotateImg1 = new rotateAnimation();
var rotateImg2 = new rotateAnimation();
var rotateImg3 = new rotateAnimation();


rotateImg1.animate("img1", "cw");
rotateImg1.animate("img2", "ccw");
rotateImg1.animate("img3", "cw");