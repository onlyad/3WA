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

/**
 * Get the next Incrementation for a slider. If user reach max, then min value is return.
 * @param {int} iMin minimum value for the slider
 * @param {int} iMax maximum value for the slider
 * @returns {int} the next number
 */
function getNextIncr4Slider(iMin, iMax) {
    if (iIndex >= iMax) {
        iIndex = iMin;
    } else {
        iIndex++;

    }
    return iIndex;
}
/**
 * Get the next Decrementation for a slider. If user reach min, then max value is return.
 * @param {int} iMin minimum value for the slider
 * @param {int} iMax maximum value for the slider
 * @returns {int} the previous number
 */
function getPreviousDecr4Slider(iMin, iMax, iStep) {
    if (iIndex <= iMin ) {
        iIndex = iMax;
    } else {
        iIndex -= iStep;
    }
    return iIndex;
}
