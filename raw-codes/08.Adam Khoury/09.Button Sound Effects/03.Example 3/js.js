var sound1=new Audio();
sound1.src="au1.mp3";


function loadContent(num){
    
    sound1.play();
    
    document.getElementById("dis").innerHTML="The content "+num;
    
}