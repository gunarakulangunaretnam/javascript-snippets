var price = 150;
var sale = 25;
var savings = (price * sale) / 100;
var salePrice = price - savings;

document.write("Original price $ " + price.toFixed(2) + "<br>");
document.write("Sale: " + sale +"%"+ "<br>");
document.write("Saving " + savings + "<br>");
document.write("The salePrice " + salePrice);