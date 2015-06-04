/**
 * Created by jour on 6/3/2015.
 */
//JS4 - exercice 6 - jeu du nombre aléatoire
//Dans cet exercice vous allez créer un jeu du nombre aléatoire.
//
//    Les étapes sont les suivantes :
//
//    Vous demandez au joueur de choisir les intervalles (min et max)
//L'ordinateur choisi alors un nombre aléatoire compris dans cet intervalle
//Le joueur doit alors trouver le fameux nombre aléatoire
//La partie est gagnée lorsque le joueur trouve le bon nombre
//La partie est perdue lorsque le joueur a dépassé les 10 essais
//
//
//BONUS
//
//Ajouter le fonctionnement du "plus" ou du "moins" : si le nombre saisi est plus grand que le
// nombre à trouver, alors afficher une aide "c'est moins!".
//    Donner la possibilité de rejouer
//Afficher le nombre de parties jouées
//Afficher le nombre de victoires/défaites
//Afficher la meilleure performance
//Afficher le pourcentage de victoire / défaite
//Afficher la moyenne de coups par victoire


/**
 * //    Vous demandez au joueur de choisir les intervalles (min et max)
 //L'ordinateur choisi alors un nombre aléatoire compris dans cet intervalle
 //Le joueur doit alors trouver le fameux nombre aléatoire
 //La partie est gagnée lorsque le joueur trouve le bon nombre
 //La partie est perdue lorsque le joueur a dépassé les 10 essais
 */

const iMAX_TRIES_ALLOWED = 5;
const iMIN = 0;
const iMAX = 1000;

var iRangeMin, iRangeMax;
var iCountTries ;
var sMsg;
var iCountAllGames = 0;
var iCountWinGames = 0;
var iSumTries = 0;
do {
    iRangeMin = getFromUser1IntegerNumber(iMIN, iMAX, "Please choose the min range to play the guess game");
    iRangeMax = getFromUser1IntegerNumber(iMIN, iMAX, "Please choose the max range to play the guess game");
    iComputerRandNumber = getRandIntBetweenMinAndMax(iRangeMin, iRangeMax);
    iCountTries = 0;
    iCountMinTries = 1;
    iCountAllGames++;
    do {
        iCountTries++;
        iUserGuessNumber = getFromUser1IntegerNumber(iRangeMin, iRangeMax, "");
        if (iUserGuessNumber > iComputerRandNumber) {
            document.write("<br> Game #" + iCountAllGames + " . Try #" + iCountTries + ". Your guess is " +
                iUserGuessNumber + " which is higher than the Rand Number");
        } else if (iUserGuessNumber < iComputerRandNumber) {
            document.write("<br> Game #" + iCountAllGames + " . Try #" + iCountTries + ". Your guess is " +
                iUserGuessNumber + " which is lower than the Rand Number");
        }
    } while ((iUserGuessNumber != iComputerRandNumber) && iCountTries < iMAX_TRIES_ALLOWED);

    if (iUserGuessNumber == iComputerRandNumber){
        sMsg = "<br> U win in " + iCountTries + " tries. The rand number is " + iComputerRandNumber;
        iCountWinGames++;
        iSumTries += iCountTries;

        if (1 == iCountWinGames ) {
            iCountMinTries = iCountTries;
        } else if (iCountMinTries > iCountTries ){
                iCountMinTries = iCountTries;
        }
    } else {
        sMsg = "<br> U lost in " + iCountTries + " tries. The rand number is " + iComputerRandNumber;
    }
    document.write(sMsg);

} while (confirm("Want to play again?"));


/**
 * //Afficher le nombre de parties jouées
 //Afficher le nombre de victoires/défaites
 //Afficher la meilleure performance
 //Afficher le pourcentage de victoire / défaite
 //Afficher la moyenne de coups par victoire
 */
document.write("<br> You play " + iCountAllGames + " Games");
document.write("<br> You win " + iCountWinGames + " Games. And lost " + (iCountAllGames - iCountWinGames) + " Games." );
document.write ("<br> Your best game is in " + iCountMinTries + " tries");
document.write ("<br> Average tries of Win Games :" + (iSumTries / iCountWinGames));