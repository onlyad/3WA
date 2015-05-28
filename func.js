/**
 * Created by Dung on 2015-05-28.
 */
const fTPS = 0.05;
const fTVQ = 0.09975;
const fAMOUNT_INCREMENT = 0.5;

function calculateRealPrice (fPriceB4Tax , fTips ) {
    return ((fPriceB4Tax * (1 + fTPS + fTVQ + (fTips / 100))));
}
function displayPrices (fPriceMin, fPriceMax, fTips) {

    for (var fPriceB4Tax = fPriceMin; fPriceB4Tax <= fPriceMax; fPriceB4Tax += fAMOUNT_INCREMENT) {
        fPriceAfterTax = calculateRealPrice(fPriceB4Tax, fTips);
        document.write("<br> Price before tax:  " + fPriceB4Tax + " / Price after tax:" + fPriceAfterTax);
    }
}