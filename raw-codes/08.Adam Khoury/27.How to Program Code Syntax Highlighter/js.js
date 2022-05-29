window.addEventListener("load", syntaxHilighter);

function syntaxHilighter() {

    var ca = document.getElementsByTagName("code");
     

    for (i = 0; i < ca.length; i++) {

        var data = ca[i].innerHTML;

        data = data.replace(/"(.*?)"/g, '<span class="qoutation">&quot;$1&quot;</span>');
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="bulet">&lt;$1&gt;</span>');
        data=data.replace(/\/\* (.*?) *\//g,'<span class="cammand">/*$1*/</span>')
        
      
	  ca[i].innerHTML = data;
	  
    }

 
    
}


/*

*(.*?) This means everything inside.
* $1 This also means everything inside.

*/




