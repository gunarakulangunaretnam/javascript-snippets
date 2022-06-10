document.getElementById("start").addEventListener("click", function () {

    document.getElementById("ball").style.animation = "ball-bounce 0.7s steps(6) infinite";

});

document.getElementById("stop").addEventListener("click", function () {

    document.getElementById("ball").style.animation = "";
})

