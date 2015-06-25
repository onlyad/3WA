/**
 * Created by Dung on 2015-06-24.
 */
//S4 - exercice 6 - jeu du nombre aléatoire
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
//BONUS
//
//Ajouter le fonctionnement du "plus" ou du "moins" : si le nombre saisi est plus grand que le nombre à trouver, alors afficher une aide "c'est moins!".
//    Donner la possibilité de rejouer
//Afficher le nombre de parties jouées
//Afficher le nombre de victoires/défaites
//Afficher la meilleure performance
//Afficher le pourcentage de victoire / défaite
//Afficher la moyenne de coups par victoire
//Définir un temps de jeu maximum

const iMAX_TRY = 5;

var iCountGame = 0;
var iCountWinGame = 0;
var iCountTryBest = 0;



do {
    iCountGame++;
    iRangeMin = getIntFromUser("Please choose a min number:");
    iRangeMax = getIntFromUser("Please choose a max number: ");

    iComputerRandomNumber = getRandIntBetweenMinAndMax(iRangeMin, iRangeMax);
    var iCountTry = 0;
    do {
        iCountTry++;
        iUserChosenNumber = getIntBetweenMinAndMaxFromUser(iRangeMin, iRangeMax, "Please guess the number between : ");
        if (iComputerRandomNumber > iUserChosenNumber) {
            document.write("<br> Guess No " + iCountTry + ". Guessing number is: " + iUserChosenNumber +
            ". The right number is greater than your guess");
        } else if (iComputerRandomNumber < iUserChosenNumber) {
            document.write("<br> Guess No " + iCountTry + ". Guessing number is: " + iUserChosenNumber +
            ". The right number is less than your guess ");
        }

    } while (iUserChosenNumber != iComputerRandomNumber && iCountTry < iMAX_TRY);

    if (iComputerRandomNumber == iUserChosenNumber) {
        document.write("<br> U guess it right. The Random Number is :" + iComputerRandomNumber);
        iCountWinGame++;
        if (iCountWinGame = 1) {
            iCountTryBest = iCountTry;
        } else {
            if (iCountTry < iCountTryBest) {
                iCountTryBest = iCountTry;
            }
        }

    }

} while (confirm("Play Again?"));

document.write("<br> U play " + iCountWinGame + " game, Ur best play is with " + iCountTryBest + " guess");