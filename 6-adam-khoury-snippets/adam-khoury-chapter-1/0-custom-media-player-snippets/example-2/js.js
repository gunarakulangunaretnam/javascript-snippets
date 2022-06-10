var video1,playPausebtn,seekBar;

window.onload=function(){
    
    //Sets Objects References
    
    video1=document.getElementById("video1");
    playPausebtn=document.getElementById("playBtn");
    seekBar=document.getElementById("seekBar");
    
    //Add Events
    playPausebtn.addEventListener("click",playSystem);
    seekBar.addEventListener("change",seekingSys);
    video1.addEventListener("timeupdate",video1TimeSystem);
}

function playSystem(){
    
    if(video1.paused){
        
        video1.play();
        playPausebtn.value="Pause";
        
    }else{
        
        video1.pause();
        playPausebtn.value="Play";
        
    }
    
}

function seekingSys(){
    
    var seek=video1.duration*(seekBar.value/100);
    video1.currentTime=seek;
    
    
}

function video1TimeSystem(){
    
var theTime=video1.currentTime*(100/video1.duration);
    seekBar.value=theTime;
    
    
    
}