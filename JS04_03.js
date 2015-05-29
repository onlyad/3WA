/**
 * Created by jour on 5/29/2015.
 */
//Il est possible de récupérer un nombre aléatoire en JavaScript. Pour cela on utilise la fonction :
//
//    Math.random()
//
//
//écrire le code permettant d'obtenir un nombre aléatoire entre 1 et 100.
//écrire une fonction permettant de récupérer plusieurs nombres aléatoires (le chiffre est passé en paramètres).
//Il faut réfléchir à une façon de retourner plusieurs nombres...
//    afficher tous vos nombres dans des listes HTML
//
//
//
//
//BONUS
//
//
//
//Si l'on ne demande qu'un seul nombre, la fonction ne doit pas renvoyer de tableau, mais un simple nombre entier.
//    Demander la quantité de nombres aléatoires à votre utilisateur.

/** Partie 1: écrire le code permettant d'obtenir un nombre aléatoire entre 1 et 100.
 */



var aiRandNumber = [];


/**
 * Partie 1: écrire le code permettant d'obtenir un nombre aléatoire entre 1 et 100.
 */

iNumber = rand1To100();
document.write(Math.ceil(0.0001));


/**
 * Bonus 1: Si l'on ne demande qu'un seul nombre, la fonction ne doit pas renvoyer de tableau, mais un simple
 * nombre entier.
 */

/**
 * Bonus 2: Demander la quantité de nombres aléatoires à votre utilisateur.
 */


iNumber = parseInt(prompt("Please enter the quantity of rand number:"));

if (1 == iNumber) {
    iNumber = getNthRand(1);
    writeHtml(iNumber);
}
 else {
    aiRandNumber = getNthRand(iNumber);
    writeHtml(aiRandNumber);
}






