/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/

/**
 * Get a random number between a min and max
 *
 * @param {int} iMin minimum value
 * @param {int} iMax maximum value
 * @returns {int} Random number
 */
function getRandIntBetweenMinAndMax(iMin, iMax) {
    return Math.ceil(Math.random() * (iMax - iMin)) + iMin;
}
