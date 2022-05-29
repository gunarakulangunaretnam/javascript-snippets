function tipCalculate(slider,bill) {

    var tip = document.getElementById("tip");
    var slideval = document.getElementById("slideval");
    var bill = document.getElementById(bill).value;
    var slaprice = document.getElementById("sale");
   


   
   var prcnt = slider * .01;//It is moves decimal point two places left.
   var a = tip.innerHTML = (bill * prcnt).toFixed(2);

   slideval.innerHTML = slider + "%";
   slaprice.innerHTML = bill - a;

        



        

}
