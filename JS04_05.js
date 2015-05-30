/**
 * Created by jour on 5/29/2015.
 */
const iMax = 100;
const iMin = 1;
var iNumber;

iNumber = getFromUser1IntegerNumber(iMin, iMax);
document.write("<br> Number enter is: " + iNumber);

/**Partie Bonus
 *Ecrire une autre fonction qui récupère des nombres à virgule.
 */
const fMin = 1.0;
const fMax = 100.00;
var fNumber = getFromUser1FloatNumber(fMin, fMax);
document.write("<br> Number enter is: " + fNumber);

/**Partie Bonus 2
 * En utilisant l'instruction typeof, écrire une fonction qui récupère du texte
 */
var sString = getFromUserString();
document.write("<br> String enter is: " + sString);