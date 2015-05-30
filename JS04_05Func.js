/**
 * Created by jour on 5/29/2015.
 */

/**Partie 1:
 * fonction permettant de demander un nombre entier compris entre un minimum et un maximum. On doit récupérer
 * ce nombre en le demandant à l'utilisateur. Votre fonction doit renvoyer le nombre choisi, et doit continuer
 * son exécution tant que l'utilisateur ne saisit pas ce qu'il faut
 * @param iMin
 * @param iMax
 * @returns {*}
 */

function getFromUser1IntegerNumber (iMin, iMax) {
    var iNumber ;
    do {
       iNumber = parseInt(prompt("Please input an integer number:"));
   } while (isNaN(iNumber) || iMin > iNumber || iMax < iNumber);
    return iNumber;
}

function isFloat (fNumber) {

         return (!isNaN(fNumber) && (0 != fNumber % 1 ));

}
/**Partie Bonus
 *Ecrire une autre fonction qui récupère des nombres à virgule.
 * @param fMin
 * @param fMax
 */
function getFromUser1FloatNumber (fMin, fMax) {
    var fNumber;
    do {
        fNumber = parseFloat(prompt("Please input a float number:"));
    } while (!isFloat(fNumber) || fMin > fNumber || fNumber > fMax );
    return fNumber;
}

/**Partie Bonus 2
 * En utilisant l'instruction typeof, écrire une fonction qui récupère du texte
 */
function getFromUserString () {
    var sString;
    do {
        sString = prompt("Please input a string:");
    } while (!(typeof (sString) === "string"));
    return sString;
}