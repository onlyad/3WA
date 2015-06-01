/**
 * Created by Dung on 2015-05-26.
 */
var iMultiplyBy10 = 1;
var fNumber;
var fNumberRoundOff;
var iRoundOff;
do {
    fNumber = prompt("Please enter a number:");

} while (isNaN(fNumber) || !fNumber);

document.write("<br> Nombre Entree est: " + fNumber);
document.write("<br> Nombre tronque (parseInt): " + parseInt(fNumber));
document.write("<br> Nombre tronque (Math.floor): " + Math.floor(fNumber));
document.write("<br> Nombre arrondis au dessus (Math.ceil): " + Math.ceil(fNumber));
document.write("<br> Nombre arrondis (Math.round): " + Math.round(fNumber));

// Bonus
iRoundOff = parseInt(prompt("How many decimal do you want?"));
fNumberRoundOff = fNumber;

for (var iCount = 1; iCount <= iRoundOff; iCount++) {
    fNumberRoundOff = fNumberRoundOff * 10;
    iMultiplyBy10 = iMultiplyBy10 * 10;
}
fNumberRoundOff = Math.round(fNumberRoundOff) / iMultiplyBy10;

document.write("<br> Number " + fNumber + " Rounded to " + iRoundOff + " is: " + fNumberRoundOff);