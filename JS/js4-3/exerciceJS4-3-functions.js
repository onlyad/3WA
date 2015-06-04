/**
 * Get a random number between 1 and 100
 * @returns {number} random number
 */
function getRandomNumberBetweenOneAndAHundred() {
    return Math.ceil(Math.random() * 100);
}


/**
 * Get several random numbers.
 * @param iNthNumbersToGenerate number of number to generate
 * @returns {Array} random numbers
 */
function getSeveralRandomNumbers(iNthNumbersToGenerate) {
    var aRandomNumbers = [];
    for (var iTimes = 0; iTimes < iNthNumbersToGenerate; iTimes++) {
        aRandomNumbers[iTimes] = getRandomNumberBetweenOneAndAHundred();
    }
    return aRandomNumbers;
}


/*********************/
/******* BONUS *******/
/*********************/

/**
 * Get random number(s).
 * @param iNthNumbersToGenerate number of number to generate
 * @returns {Array|int} random number(s)
 */
function getBonusSeveralRandomNumbers(iNthNumbersToGenerate) {
    var aRandomNumbers = [];
    for (var iTimes = 0; iTimes < iNthNumbersToGenerate; iTimes++) {
        aRandomNumbers[iTimes] = getRandomNumberBetweenOneAndAHundred();
    }

    if (1 == iNthNumbersToGenerate) {
        return aRandomNumbers[0];
    }
    else {
        return aRandomNumbers;
    }
}

function getCustomRandomNumberBetweenOneAndAHundred() {
    var dDate = new Date();
    // milliseconds is between 0 and 999
    var iRandomNumber = dDate.getUTCMilliseconds();
    // divides by 10, to get between 0 and 100
    iRandomNumber /= 10;
    // plus 1, to get between 1 and 100
    iRandomNumber = iRandomNumber + 1;
    // parseInt to avoid float numbers
    iRandomNumber = parseInt(iRandomNumber);

    return iRandomNumber;
}