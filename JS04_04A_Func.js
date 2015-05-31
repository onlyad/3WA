/**
 * Created by Dung on 2015-05-31.
 */
//Ecrire une fonction permettant de générer un nombre aléatoire entre un minimum et un maximum donnés en paramètres.
//
//    BONUS
//
//Ecrire une autre fonction pour générer des nombres flottants aléatoires. On doit pouvoir choisir le
// nombre de chiffre après la virgule.



function getRandBetweenMinAndMax(iRangeMin, iRangeMax) {
    return parseInt((Math.random()* (iRangeMax - iRangeMin))) + iRangeMin;
}
