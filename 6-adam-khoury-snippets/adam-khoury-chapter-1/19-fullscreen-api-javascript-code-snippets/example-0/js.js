var img=document.getElementById("img1")

function fullScreenSystemFun() {

    if (img.requestFullScreen) {

        img.requestFullScreen();

    } else if (img.webkitRequestFullScreen) {

        img.webkitRequestFullScreen();

    } else if (img.mozRequestFullScreen) {

        img.mozRequestFullScreen();
		
    }else if(img.msRequestFullScreen){
		
		img.msRequestFullScreen();
	}

}

