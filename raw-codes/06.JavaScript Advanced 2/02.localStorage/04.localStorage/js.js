localStorage.setItem("fname","Kuna");
localStorage.setItem("lname","Rakulan");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");

localStorage.clear();

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");




/*Notes

*We can clear all data in the localStorage by using clear() method.

*/