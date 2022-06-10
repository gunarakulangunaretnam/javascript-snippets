window.onload = function () {


    document.getElementById("btn").addEventListener("click", fun1);
    document.getElementById("btn2").addEventListener("mouseover", fun2);
}

function fun1() {

    alert(this.id + " mouse click makes script run");//this.id means the id of the button.

}

function fun2() {

    alert(this.id + " mouse over makes scipt run");//this.id means the id of the button.
}

//Put Javascript here when ready.


//We don't have to 'on' prefiex for addEventListener.but do have to use it for attachEvent. 


//We don't have to use if else if condition if we don't want to make the script to work in all old and new browers.