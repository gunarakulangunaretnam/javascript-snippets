
var video1,playPausebtn,seekBar,time,duration,mute,volumeSeeker;

window.onload=function(){
    
    //Sets Objects References
    
    video1=document.getElementById("video1");
    playPausebtn=document.getElementById("playBtn");
    seekBar=document.getElementById("seekBar");
    time=document.getElementById("time");
    duration=document.getElementById("duration");
    muteBtn=document.getElementById("mute");
    volumeSeeker=document.getElementById("volumeseek");
    
    //Add Events
    playPausebtn.addEventListener("click",playSystem);
    seekBar.addEventListener("change",seekingSys);
    video1.addEventListener("timeupdate",video1TimeSystem);
    muteBtn.addEventListener("click",muteSystem)
    volumeSeeker.addEventListener("change",volumeSeekFun);
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
    
    var currentMins=Math.floor(video1.currentTime/60);
    var currentSecs=Math.floor(video1.currentTime-currentMins*60);
    var durMins=Math.floor(video1.duration/60);
    var durSecs=Math.floor(video1.duration-durMins*60);
    
    
    if(currentMins<10){
        
        currentMins="0"+currentMins;
        
        
    }
    
    if(currentSecs<10){
        
        currentSecs="0"+currentSecs;
        
    }
    
    if(durMins<10){
        
        durMins="0"+durMins;
        
    }
    
    if(durSecs<10){
        
        durSecs="0"+durSecs;
        
    }

    
    time.innerHTML=currentMins+":"+currentSecs;
    duration.innerHTML=durMins+":"+durSecs;
    
}

function muteSystem(){
    
   
    if(!video1.muted){
        
        video1.muted=true;
        muteBtn.value="Unmute";
        volumeSeeker.value=0;
        
    }else{
        
         video1.muted=false;
         muteBtn.value="Mute";
         volumeSeeker.value=100;
    }
    
    
}

function volumeSeekFun(){
   
    if(video1.muted){
        
          video1.muted=false;
          muteBtn.value="Mute";
        
    }
        

  video1.volume=volumeSeeker.value/100;
    
    
        
    

}