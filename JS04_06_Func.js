/**
 * Created by jour on 6/3/2015.
 */

/**
 * Get a random number between a min and max
 *
 * @param {int} iMin minimum value
 * @param {int} iMax maximum value
 * @returns {int} Random number
 */
function getRandIntBetweenMinAndMax (iMin, iMax){
    return Math.ceil( Math.random() * (iMax - iMin) )+ iMin;
}

/**
 * fonction permettant de demander un nombre entier compris entre un minimum et un maximum. On doit récupérer
 * ce nombre en le demandant à l'utilisateur. Votre fonction doit renvoyer le nombre choisi, et doit continuer
 * son exécution tant que l'utilisateur ne saisit pas ce qu'il faut
 * @param {int} iMin minimum value
 * @param {int} iMax maximum value
 * @param {sMsg} sMsg The message to be display in an popup.
 * @returns {int} a number that user entered
 */
function getFromUser1IntegerNumber (iMin, iMax, sMsg) {
    var iNumber;
    do {
        iNumber = parseInt(prompt(sMsg + "Please input an integer number between " + iMin + " and " + iMax));
    } while (isNaN(iNumber) || iMin > iNumber || iMax < iNumber);
    return iNumber;
}

