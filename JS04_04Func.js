/**
 * Created by jour on 5/29/2015.
 */

function getRandInt (iMin, iMax) {

    return Math.ceil(Math.random() * (iMax - iMin)) + iMin;
}


function getRandFloat (iDecimalPosition) {

    var iMultiplyOf10 = 1;
    var fRandomNumber = Math.random() ;
    for (var iPosition = 1; iPosition <= iDecimalPosition; iPosition++ ){
       fRandomNumber = fRandomNumber * 10 ;
       iMultiplyOf10 *= 10;
    }
    return  Math.round(fRandomNumber) / iMultiplyOf10;
}
function getRangeRandFloat (iMin, iMax, iDecimal) {
    return (getRandFloat(iDecimal)* (iMax - iMin))+ iMin;
}