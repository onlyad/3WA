/**
 * Created by Dung on 2015-06-24.
 */


function getRandIntBetweenMinAndMax (iMin, iMax) {
   return Math.ceil(Math.random() * (iMax - iMin)) + iMin;
}

function getIntFromUser(sMessage) {
    var iNumber;
    do {
        iNumber = parseInt(prompt(sMessage));
    } while ( isNaN(iNumber));
    return iNumber;
}

function getIntBetweenMinAndMaxFromUser (iMin, iMax, sMessage ) {
    var iNumber;
    do {
        iNumber = parseInt(prompt(sMessage + iMin + " & " + iMax));
    } while (isNaN(iNumber) || (iMin > iNumber || iNumber > iMax));
    return iNumber;
}
