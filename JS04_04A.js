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
document.write("<br> Part 1: Random Number between Min and Max deine by user");
document.write("<br>Random Number between Min " + 10 + " and Max " + 20 + " is : " +
getRandBetweenMinAndMax(10, 20));
document.write("<br>Random Number between Min " + 10 + " and Max " + 100 + " is : " +
getRandBetweenMinAndMax(10, 100));
document.write("<br>Random Number between Min " + 1 + " and Max " + 6 + " is : " +
getRandBetweenMinAndMax(1, 6));
