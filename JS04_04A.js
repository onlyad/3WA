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
document.write("<br> Part 1: Random Integer Number between Min and Max define by user");
document.write("<br>Random Number between Min " + 10 + " and Max " + 20 + " is : " +
getRandIntegerBetweenMinAndMax(10, 20));
document.write("<br>Random Number between Min " + 10 + " and Max " + 100 + " is : " +
getRandIntegerBetweenMinAndMax(10, 100));
document.write("<br>Random Number between Min " + 1 + " and Max " + 6 + " is : " +
getRandIntegerBetweenMinAndMax(1, 6));


/**    BONUS
 *
 * Ecrire une autre fonction pour générer des nombres flottants aléatoires. On doit pouvoir choisir le
 * nombre de chiffre après la virgule.
 */
document.write("<br> Part Bonus 1: Random Float Number between Min and Max define by user");
document.write("<br>Random Number between Min " + 10.00 + " and Max " + 20.00 + " is : " +
getRandFloatBetweenMinAndMax(10.00, 20.00, 3));
document.write("<br>Random Number between Min " + 10.00 + " and Max " + 100.00 + " is : " +
getRandFloatBetweenMinAndMax(10.00, 100.00, 5));
document.write("<br>Random Number between Min " + 1 + " and Max " + 6 + " is : " +
getRandFloatBetweenMinAndMax(1.00, 6.00, 2));
