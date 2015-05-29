/**
 * Created by jour on 5/29/2015.
 */
//Ecrire une fonction permettant de générer un nombre aléatoire entre un minimum et un maximum donnés en paramètres.
//
//    BONUS
//
//Ajouter un paramètre pour personnaliser le message du prompt().
//    Ecrire une autre fonction pour générer des nombres flottants aléatoires. On doit pouvoir choisir le nombre de
//chiffre après la virgule.

/**
 * partie 1: Ecrire une fonction permettant de générer un nombre aléatoire entre un minimum et un maximum
 * donnés en paramètres.
 */

document.write("<br>" + getRandInt(0, 10));
document.write("<br> 10-20: " + getRandInt(10, 20));
document.write("<br> 10-20: " + getRandInt(10, 20));
document.write("<br> 10-20: " + getRandInt(10, 20));
document.write("<br> 10-20: " + getRandInt(10, 20));
document.write("<br> 10-20: " + getRandInt(10, 20));
document.write("<br> 1-100: " + getRandInt(1, 100));
document.write("<br> 1-100: " + getRandInt(1, 100));
document.write("<br> 1-100: " + getRandInt(1, 100));
document.write("<br> 1-100: " + getRandInt(1, 100));

document.write("<br> Rand Float " + getRandFloat(3));
document.write("<br> Rand Float " + getRangeRandFloat(10 , 20, 5));