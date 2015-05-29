/**
 * Created by jour on 5/29/2015.
 */


function getUser1Number (iMin, iMax) {
    var iNumber ;
    do {
       iNumber = parseInt(prompt("Please input an integer number:"));
   } while (isNaN(iNumber));
    return iNumber;
}