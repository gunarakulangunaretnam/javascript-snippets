var video1,playBtn,seekBar,time,duration,muteBtn,volumeSeeker,fullScreen;

window.onload=function(){
    
    //Sets Objects References.
    video1=document.getElementById("video1");
    playBtn=document.getElementById("playBtn");
    seekBar=document.getElementById("seeker");
    time=document.getElementById("time");
    duration=document.getElementById("duration");
    muteBtn=document.getElementById("mute");
    volumeSeeker=document.getElementById("volumeSeeker");
    fullScreen=document.getElementById("full");
    
    //Add Events
    
    playBtn.addEventListener("click",playSystemFun);
    seekBar.addEventListener("change",seekerFun);
    video1.addEventListener("timeupdate",video1Timer);
    muteBtn.addEventListener("click",muteSystemFun);
    volumeSeeker.addEventListener("change",volumeSeekerFun);
    fullScreen.addEventListener("click",fullScreenSystemFun);
}


function playSystemFun() {
    
    if(!video1.paused){
        
        video1.pause();
        playBtn.value="Play";
        
    }else{
        
        video1.play();
        playBtn.value="Pause";
        
    }
    
    
}


function seekerFun(){
    
    var seeksValue=video1.duration*(seekBar.value/100);
    video1.currentTime=seeksValue;
}

function video1Timer(){
    
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

function muteSystemFun(){
    
    if(video1.muted){
        
        video1.muted=false;
        muteBtn.value="Mute";
        volumeSeeker.value=100;
        
        
        
        
    }else{
        
        video1.muted=true;
        muteBtn.value="Unmute";
        volumeSeeker.value=0;
    }
    
}

function volumeSeekerFun(){
    
    video1.volume=volumeSeeker.value/100;
    
    if(video1.muted){
        
        video1.muted=false;
        muteBtn.value="Mute";
        
    }
	
	if(volumeSeeker.value==0){
		
		 muteBtn.value="Unmute";
		
	}else if(volumeSeeker.value>0){
		
		muteBtn.value="Mute";
		
	}
    
}

function fullScreenSystemFun(){
    
    if(video1.requestFullScreen){
        
        video1.requestFullScreen();
        
    }else if(video1.webkitRequestFullScreen){
        
        video1.webkitRequestFullScreen();
        
    }else if(video1.mozRequestFullScreen){
        
        video1.mozRequestFullScreen();
    }
    
}


/*Notes

*We can add grapihcal images for play,pause and mute buttons;
 

*/