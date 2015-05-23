/**
 * Created by jour on 5/21/2015.
 */

const iVAL_MAX = 999;
var iSquareNumber;

for (var iCounter = 1; iCounter <= iVAL_MAX; iCounter += 2) {
    if (iCounter < 100) {
        iSquareNumber = Math.pow(iCounter, 2);

        if (iCounter % 5 == 0) {
            document.write("<br>Valeur: " + iCounter  + " est: -" + iSquareNumber);
        }
        else {
            document.write("<br>Valeur: " + iCounter  + " est: " + iSquareNumber);
        }

    }
    else if (iCounter > 300) {
        document.write("<br>" + iCounter);
        if ( iCounter / 5 == parseInt(iCounter / 5)) {
            document.write("<br>Valeur: " + iCounter  + " est: -" + iCounter);
        }
    }
}

// Bonus
var iValue;

for (var iOddNumber = 1; iOddNumber <= iVAL_MAX; iOddNumber += 2) {
    iValue = 0;
    if( iOddNumber /5 == parseInt(iOddNumber / 5)) {
        iValue = -iOddNumber;
    }
    else if (iOddNumber < 100) {
        iValue = iOddNumber * iOddNumber;
    }
    else if (iOddNumber > 300){
        iValue = iOddNumber;
    }
    if (iValue != 0) {
        document.write("<br>Pour le chiffre: " + iOddNumber +  "La Valeur est: " + iValue);
    }

}


