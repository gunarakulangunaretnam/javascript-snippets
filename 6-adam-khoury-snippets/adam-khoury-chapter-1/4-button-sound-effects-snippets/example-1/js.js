var sound1=new Audio();
sound1.src="au1.mp3";

    
var btns=document.getElementsByTagName("a");
    
    for(a=0;a<btns.length;a++){
        
        btns[a].onmousedown=function(){
            
            sound1.play();
            
        }
        
    }
    
