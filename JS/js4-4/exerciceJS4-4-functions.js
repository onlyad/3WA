/**
 * Calculate a random integer between iMin and iMax.
 *
 * @param {int} iMin minimum value
 * @param {int} iMax maximum value
 * @return {int} random integer between iMin and iMax.
 */
function randomInteger(iMin, iMax) {
    return Math.ceil(Math.random() * (iMax - iMin)) + iMin;
}


/*********************/
/******   BONUS  *****/
/*********************/

/**
 /**
 * Calculate a random float between fMin and fMax.
 *
 * @param {float} fMin minimum value
 * @param {float} fMax maximum value
 * @param {int} iCommaSize size of numbers after comma
 * @return {float} random float between fMin and iMax.
 */
function randomFloat(fMin, fMax, iCommaSize) {
    var iTenMultiple = 10;
    for (var iCommaPosition = 1; iCommaPosition < iCommaSize; iCommaPosition++) {
        iTenMultiple *= 10;
    }

    return Math.ceil(Math.random() * (fMax - fMin) * iTenMultiple) / iTenMultiple + fMin;
}