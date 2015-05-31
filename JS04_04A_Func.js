/**
 * Created by Dung on 2015-05-31.
 */
//Ecrire une fonction permettant de générer un nombre aléatoire entre un minimum et un maximum donnés en paramètres.
//
//    BONUS
//
//Ecrire une autre fonction pour générer des nombres flottants aléatoires. On doit pouvoir choisir le
// nombre de chiffre après la virgule.


/**
 * Partie 1: fonction permettant de générer un nombre aléatoire entre un minimum et un maximum donnés en paramètres.
 */
function getRandIntegerBetweenMinAndMax(iRangeMin, iRangeMax) {
    return parseInt((Math.random() * (iRangeMax - iRangeMin))) + iRangeMin;
}
/**
 * BONUS
 * Ecrire une autre fonction pour générer des nombres flottants aléatoires. On doit pouvoir choisir le
 * nombre de chiffre après la virgule.
 */
function getRandFloatBetweenMinAndMax(fRangeMin, fRangeMax, iDecimal) {
    var iMultiplicationOf10 = 1;
    for (iCount = 1; iCount <= iDecimal; iCount++) {
        iMultiplicationOf10 *= 10;
    }
    var fRandFloat = Math.random();
    fRandFloat = (fRandFloat * (fRangeMax - fRangeMin)) + fRangeMin;
    fRandFloat = fRandFloat * iMultiplicationOf10;
    fRandFloat = Math.round(fRandFloat);
    fRandFloat = fRandFloat / iMultiplicationOf10;
    return fRandFloat;
}

