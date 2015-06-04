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

const iMAX_GAME_PERMIT = 10;

var aiWinGames =[];
var sMsg = "";
var iCountAllGames = 0;
var iCountGuess;
var iCountWinGame = 0;
var iUserGuessNumber = 0;
var iComputerRandNumber;
var iRandRangeMin, iRandRangeMax;

do {
    dStart = new Date();
    iCountAllGames++; // new game. We increment 1 so that when display, it will said "Game 1" instead "Game 0"

    do {
        iRandRangeMin = parseInt(prompt("Please Enter the Min Range for Random Number:"))
     } while (isNaN(iRandRangeMin));
    do {
        iRandRangeMax = parseInt(prompt("Please Enter the Max Range for Random Number:"))
    } while (isNaN(iRandRangeMax));

    iComputerRandNumber = getRandIntBetweenMinAndMax(iRandRangeMin, iRandRangeMax);
    iCountGuess = 0;

    document.write("<h2> Game Number : " + iCountAllGames + "</h2>");
    do {
            iCountGuess++; // We initialized at 0 and we increment 1 at the beginning to display Game 1 ...10.
            // Coz if we iCountGuess at the end, there will be one too much.
            sMsg = "Game " + iCountAllGames + ": Please guess the number the computer has choose. ";
            iUserGuessNumber = getFromUser1IntegerNumber( iRandRangeMin, iRandRangeMax, sMsg);

        if (iComputerRandNumber > iUserGuessNumber) {
            document.write("<br> Guess No" + iCountGuess + ". The number you guess " + iUserGuessNumber + " is lower than the Computer choosen number");
        } else if (iComputerRandNumber < iUserGuessNumber) {
            document.write("<br> Guess No" +  iCountGuess + ". The number you guess " + iUserGuessNumber + " is higher than the Computer choosen number");
        }
    } while (iUserGuessNumber != iComputerRandNumber && iCountGuess < iMAX_GAME_PERMIT);
    // Loop til user has tried iMAX_GAME_PERMIT times unsuccessfully or user has get the exact Computer random number

    if (iUserGuessNumber == iComputerRandNumber) {
        document.write("<br> You have won. The right number is : " + iComputerRandNumber +
                        ". You get in " + iCountGuess + " Guess.");
        aiWinGames [iCountWinGame] = iCountGuess;
        iCountWinGame++;
        // I put the number of win guess in an array integer aiWinGames. The array start at Index = 1;

    } else {
        document.write("<br> You lost. You did not guess the right number after " + iMAX_GAME_PERMIT + " tries");
    }

    dEnd = new Date();
} while (confirm("Do you want to play again?") && dEnd - dStart <= 300000 );
// Repeat the game while User still want to play;

/******************************************************************
 * After the games, display all the statistic related to the game
 ******************************************************************/
if (dEnd - dStart > 300000) {
    document.write("<h3> You have only 5 minutes to play and you take more than 5 min. </h3>" );
}



// Display all the win / lost game
document.write("<h3> You play " + iCountAllGames   + " Games. You win " + iCountWinGame + " times. You lost " +
         (iCountAllGames - iCountWinGame) + " times." + "</h3>");

// Search in the Array Integer aiWinGames, the lowest number of guess.
var iLowestNumberOfGuessIndex = 0;
for (var iIndex = 1 ; iIndex < aiWinGames.length; iIndex++) {
    if (aiWinGames[iIndex] < aiWinGames[iLowestNumberOfGuessIndex] )  {
        iLowestNumberOfGuessIndex = iIndex;

    }
}
// Display the lowest number of guess in all the game user play;
document.write("<h3> The best game you play is the Game number " + (iLowestNumberOfGuessIndex  + 1) + ". You won in " +
    aiWinGames[iLowestNumberOfGuessIndex] + " try." + "</h3>" );

// Display the % of win / lost;
document.write("<h3> You win " + (iCountWinGame / iCountAllGames * 100) + " % of the time. You lost " +
    ((iCountAllGames - iCountWinGame)  / iCountAllGames * 100) + " % of the time. </h3>");

// Calculate the average of number of guess of all WinGames
// By taking the Sum of all CountGuess in aiWinGame divide by the number of WinGames;
// This aiWinGames index start at 1;
var iSumGuessOfWinGames = 0;
for (iIndexWinGame = 0; iIndexWinGame < aiWinGames.length; iIndexWinGame++ ){
    iSumGuessOfWinGames += aiWinGames[iIndexWinGame];
}
document.write("<h3> The average of all your win games guess number is: " +
    (iSumGuessOfWinGames / aiWinGames.length ) + "</h3>");



