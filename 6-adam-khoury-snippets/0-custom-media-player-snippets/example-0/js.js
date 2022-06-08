function playPausebtn(btn,vid){
    
    var vid1=document.getElementById(vid);
    
    if(vid1.paused){
        
        vid1.play();
        btn.innerHTML="Pause";
        
    }else{
        
        vid1.pause();
        btn.innerHTML="Play";
        
    }
    
}