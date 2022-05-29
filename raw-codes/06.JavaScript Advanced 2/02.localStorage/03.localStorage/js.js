localStorage.setItem("fname","Kuna");
localStorage.setItem("lname","Rakulan");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");

localStorage.removeItem("fname");

document.write(localStorage.getItem("fname")+" "+localStorage.getItem("lname")+"<br>");


/*Notes

*We can remove data by using removeItem method.

*/