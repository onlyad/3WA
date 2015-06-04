/**
 * Ask for an integer from iMin to iMax.
 *
 * @param {int} iMin minimum value
 * @param {int} iMax maximum value
 * @param {string} sMessage message to display
 * @returns {int} chosen number.
 */
function getInteger(iMin, iMax, sMessage) {
    var iNumber;

    /*
     * La boucle s'exécute tant que l'entier n'est pas un nombre (fonction isNaN()) et
     * n'est pas compris entre les arguments min et max.
     */
    do {
        // On demande à l'utilisateur de saisir un nombre entier.
        iNumber = parseInt(window.prompt(sMessage + ' [' + iMin + '-' + iMax + ']'));
    }
    while (isNaN(iNumber) || iNumber < iMin || iNumber > iMax);

    return iNumber;
}
