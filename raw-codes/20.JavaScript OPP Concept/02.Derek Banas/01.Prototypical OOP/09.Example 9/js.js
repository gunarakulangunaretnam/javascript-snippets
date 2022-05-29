function SecrtCode() {

    var secrtNum = 78;

    this.guessNum=function(num){

        if (num > secrtNum) {

            return "Please Guess Lower Number";

        } else if (num < secrtNum) {

            return "Please Guess Higher Number";
        
        } else {


            return "You Guessed It";
        }

    }

}


SecrtCode.prototype.getNum = function () {


    return this.secrtNum;
}//If you also make geter you still can't get the secrt number.

var secrt = new SecrtCode();
document.write(secrt.secrtNum+"<br>");//We can't get the secrt number.


document.write(secrt.guessNum(78)+"<br>");

document.write(secrt.getNum());


//If we make a privaite variable inside a function that is going to be secrt.