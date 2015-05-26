const asPHRASES =
    [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "Aenean commodo ligula eget dolor. Aenean massa.",
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "Nulla consequat massa quis enim.",
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "Nullam dictum felis eu pede mollis pretium.",
        "Integer tincidunt. Cras dapibus.",
        "Vivamus elementum semper nisi.",
        "Aenean vulputate eleifend tellus.",
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
        "Phasellus viverra nulla ut metus varius laoreet.",
        "Quisque rutrum. Aenean imperdiet.",
        "Etiam ultricies nisi vel augue.",
        "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "Aenean commodo ligula eget dolor. Aenean massa.",
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "Nulla consequat massa quis enim.",
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "Nullam dictum felis eu pede mollis pretium.",
        "Integer tincidunt. Cras dapibus.",
        "Vivamus elementum semper nisi.",
        "Aenean vulputate eleifend tellus.",
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
        "Phasellus viverra nulla ut metus varius laoreet.",
        "Quisque rutrum. Aenean imperdiet.",
        "Etiam ultricies nisi vel augue.",
        "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
        "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
        "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
        "Maecenas nec odio et ante tincidunt tempus.",
        "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
        "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
        "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
    ];
var acAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z"];

var fAverageCharacters = 0.0;
var iCountChar;
var iCountChar2;
var iMostFrequentCharPosition;
var iLongestPhrasePosition;
var iPhrasePosition;
var iShortestPhrasePosition;
var cAlphabet;
var cLetter;
var sAllPhrases;
var sPhrase;


iLongestPhrasePosition = 0;
iShortestPhrasePosition = 0;
iSumCharacters = 0;


for (var iPhrasesPosition = 1; iPhrasesPosition < asPHRASES.length; iPhrasesPosition++) {


    if (asPHRASES[iLongestPhrasePosition].length < asPHRASES[iPhrasesPosition].length) {

        //alert(asPHRASES[iLongestPhrasePosition].length + " < " + asPHRASES[iPhrasesPosition + 1].length);
        iLongestPhrasePosition = iPhrasesPosition;
    }
    else if (asPHRASES[iShortestPhrasePosition].length > asPHRASES[iPhrasesPosition].length)
        iShortestPhrasePosition = iPhrasesPosition;
    //alert("The position of the longest pharse:" + iLongestPhrasePosition + " Position: " + iPhrasesPosition);
}

document.write("<br>The Position:" + iLongestPhrasePosition + "Phrase: " + asPHRASES[iLongestPhrasePosition]);
document.write("<br>The Position:" + iShortestPhrasePosition + "Phrase: " + asPHRASES[iShortestPhrasePosition]);

for (var iPhrasesPosition = 0; iPhrasesPosition < asPHRASES.length; iPhrasesPosition++) {
    iSumCharacters += asPHRASES[iPhrasesPosition].length;
}
fAverageCharacters = iSumCharacters / asPHRASES.length;
document.write("<br> Average of all character :" + fAverageCharacters);

iCountChar = 0;

iMostFrequentCharPosition = 0;
for (var iAlphabetPosition = 0; iAlphabetPosition < acAlphabet.length; iAlphabetPosition++) {
    iCountChar2 = 0;
    for (iPhrasesPosition = 0; iPhrasesPosition < asPHRASES.length; iPhrasesPosition++) {
        sPhrase = asPHRASES[iPhrasesPosition];
        for (var iCharPosition = 0; iCharPosition < sPhrase.length; iCharPosition++) {
            cAlphabet = acAlphabet[iAlphabetPosition];
            cLetter =  sPhrase[iCharPosition].toUpperCase();
            if (acAlphabet[iAlphabetPosition] == sPhrase[iCharPosition].toUpperCase()) {
                iCountChar2++;
                document.write("<br> Letter Found " +acAlphabet[iAlphabetPosition] + " occurred " +iCountChar2 );

            }
        }
    }
    if (iCountChar2 > iCountChar) {
        iMostFrequentCharPosition = iAlphabetPosition;
        iCountChar = iCountChar2;
        document.write("<br> The most frequent Letter " +acAlphabet[iAlphabetPosition] + " occurred " +iCountChar2 );
    }
}
document.write("<br> Most frequent Letter: " + acAlphabet[iMostFrequentCharPosition] + " occured " + iCountChar);

// Bonus
sAllPhrases= ""; // Need to initialized b4 concatenation!!!
for (iPhrasesPosition = 0; iPhrasesPosition < asPHRASES.length; iPhrasesPosition++) {
    sAllPhrases += asPHRASES[iPhrasesPosition];
}

iMostFrequentCharPosition = 0;
iCountChar = 0;
for (iAlphabetPosition = 0; iAlphabetPosition < acAlphabet.length; iAlphabetPosition++) {
    iCountChar2 = 0;
    for (iCharPosition = 0; iCharPosition < sAllPhrases.length; iCharPosition++) {
        if (acAlphabet[iAlphabetPosition] == sAllPhrases[iCharPosition].toUpperCase()) {
            iCountChar2++;
            document.write("<br> Bonus2, Letter Found :" + acAlphabet[iAlphabetPosition] + " occurred " + iCountChar2 )
        }
    }
    if (iCountChar2 > iCountChar){
        iCountChar = iCountChar2;
        iMostFrequentCharPosition = iAlphabetPosition;
    }
}
document.write("<br> Bonus2, Most frequent Letter: " + acAlphabet[iMostFrequentCharPosition] + " occurred " + iCountChar);