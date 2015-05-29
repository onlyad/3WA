/**
 * Created by jour on 5/29/2015.
 */

function rand1To100(){
    return parseInt(Math.ceil(Math.random() * 100));
}

/**
 * Return nth Random number.
 * Si l'on ne demande qu'un seul nombre, la fonction ne doit pas renvoyer de tableau, mais un simple nombre entier.
 * @param iNumberOfTime
 * @returns {Array}
 */


function getNthRand(iNumberOfTime) {
    var aiRandNumber = [];
    var mNumber;
    if (1 == iNumberOfTime ){
        mNumber = rand1To100();
    } else {
        for (var iCount = 0; iCount < iNumberOfTime; iCount++){
            aiRandNumber[iCount] = rand1To100();
        }
        mNumber = aiRandNumber;
    }
    return mNumber;
}
function writeHtml (mNumber) {
    document.write("<ul>");
    if (Array.isArray(mNumber)) {
        for (iCount = 0; iCount < mNumber.length; iCount++) {
            document.write("<li>" + mNumber[iCount] + "</li>");
        }
    }
    else {
        document.write("<li>" + mNumber + "</li>");
    }
    document.write("</ul>");
}
/**
//Bonus 3: Ecrire une autre fonction (toujours pour les aléatoires) sans utiliser la fonction Math.random()
*/
