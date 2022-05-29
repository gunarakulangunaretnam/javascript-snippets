<?php

header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';


echo "<response>";

   $food = $_GET['food'];
   $footArray = array("tuna","becan","beef","loaf","ham");
   
   if(in_array($food,$footArray))
	   
     echo 'We do have'.$food."!";
	 
	 elseif($food=='')
	 
	 echo "You are an idiot";

	  else
		  
         echo 'Sorry punk we dont sell no'.$food."!";
		

       

echo "</response>";


?>