/**
 * Created by Dung on 2015-05-26.
 */


var bFindNumber;
var bOutOfGuess;
var iNumberGuessAllow;
var iUser1ChosenNumber, iUser2ChosenNumber;

var iUser1ChosenIntervalMin, iUser1ChosenIntervalMax;

bFindNumber = false;
do {

    iUser1ChosenIntervalMin = parseInt(prompt("What the lowest of the interval do you choose?"));
    iUser1ChosenIntervalMax = parseInt(prompt("What the highest of the interval do you choose?"));
} while (!(iUser1ChosenIntervalMax > iUser1ChosenIntervalMin));

bFindNumber = false;
do {
    iUser1ChosenNumber = parseInt(prompt("User 1 What Number Do u choose? (between " + iUser1ChosenIntervalMin +
    " and " + iUser1ChosenIntervalMax + ")"));

} while (!(iUser1ChosenNumber <= iUser1ChosenIntervalMax && iUser1ChosenNumber >= iUser1ChosenIntervalMin));

iNumberGuessAllow = parseInt(prompt("How many time do you allow to guess?"));

bFindNumber = false;
bOutOfGuess = false;
iCountGuess = 0;

do {

    document.write("<br> You have " + (iNumberGuessAllow - iCountGuess) + " guess left!");
    iUser2ChosenNumber = parseInt(prompt(" User2 What Number Do u choose?"));
    iCountGuess++;
    if (iUser2ChosenNumber == iUser1ChosenNumber) {
        bFindNumber = true;
    }
    if( iNumberGuessAllow <= iCountGuess)  {
        bOutOfGuess = true;
    }
} while ( !(bFindNumber) && !bOutOfGuess );

if (bFindNumber) {
    document.write("<br>U guess right! The number user1 choose was: " + iUser1ChosenNumber);
    document.write("<br> U guess it right after " + iCountGuess + " time");
}
if (bOutOfGuess){
    document.write("<br> You have lost. You used all guess without getting it right");
}