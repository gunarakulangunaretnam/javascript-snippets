var video1,playBtn;

window.onload=function(){
    
    //Sets Objects References
    video1=document.getElementById("video1");
    playBtn=document.getElementById("playBtn");
    
    //Add Events
    playBtn.addEventListener("click",playSystem);
}

function playSystem(){
    

    if(video1.paused){
        
        video1.play();
        playBtn.value="Pause";
    
    }else{
        
        video1.pause();
        playBtn.value="Play";
        
    }
    
    
}