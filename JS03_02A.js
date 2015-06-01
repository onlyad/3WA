/**
 * Created by Dung on 2015-05-31.
 */
/**
JS3 - exercice 2
Vous allez écrire votre premier jeu JS !

    Il s'agit d'un jeu très simple à deux joueurs, ou le premier détermine un nombre à chercher, et le second doit retrouver ce nombre.

    Etapes

Le premier joueur doit choisir un nombre entier, entre 1 et 100.
Le second joueur cherche le bon nombre, toujours entre 1 et 100
La partie se termine lorsque le bon numéro a été trouvé.

    Bonus

Afficher le nombre de coup nécessaire pour gagner
En tout début de partie, vous pouvez demander de choisir les intervalles
Limiter la partie à 5 coups (par exemple)
*/

/**
 * Partie 1: Le premier joueur doit choisir un nombre entier, entre 1 et 100.
 Le second joueur cherche le bon nombre, toujours entre 1 et 100
 La partie se termine lorsque le bon numéro a été trouvé.
 Afficher le nombre de coup nécessaire pour gagner
 */

var iNumber2bGuess = 0;
var iCountGuess = 0;

do {
    iNumber2bGuess = parseInt(prompt("User 1, Please Enter a number to be guess: "));
} while (isNaN(iNumber2bGuess) );

do {
    iGuessNumber = parseInt(prompt("User 2, guess the number that User 1 choose: "));
    iCountGuess++;
} while (iGuessNumber != iNumber2bGuess );

document.write("You guess " + iCountGuess + " times before you are successful. The right number is: " +iNumber2bGuess);

/**
 *  Bonus 1 : En tout début de partie, vous pouvez demander de choisir les intervalles
 Limiter la partie à 5 coups (par exemple)
 *
 */
 var iGuessRangeMin, iGuessRangeMax;
var iMaxNumberOfPlay;

do {
    iGuessRangeMin = parseInt(prompt("User 1, what is the lowest number allowed to be guessed?"));
} while (isNaN(iGuessRangeMin)  );

do {
    iGuessRangeMax = parseInt(prompt("User 1, what is the highest number allowed to be guessed?"));
} while (isNaN(iGuessRangeMax)  );

do {
    iMaxNumberOfPlay = parseInt(prompt("User 1, how many time do you allows user 2 to guess?"));
} while (isNaN(iMaxNumberOfPlay)  );

iCountGuess = 0;
do {
    iGuessNumber = parseInt(prompt("User 2, guess the number that User 1 choose: "));
    iCountGuess++;
} while (iGuessNumber != iNumber2bGuess && iMaxNumberOfPlay >= iCountGuess );

if (iCountGuess > iMaxNumberOfPlay){
    document.write("<br> You lost! You guess " + iCountGuess + " more than number " + iMaxNumberOfPlay + " guess allow ");
} else {
    document.write("You guess " + iCountGuess + " times before you are successful. The right number is: " +iNumber2bGuess);
}
