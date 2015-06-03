/**
 * Display a sentence nth times.
 *
 * @param iNth will repeat nth times the display.
 */
function nthSentences(iNth) {
    for (var iPos = 1; iPos <= iNth; iPos++) {
        document.write('<p>Sentence to display!</p>');
    }
}


/**
 * Display a sentence nth times.
 *
 * @param iNth will repeat nth times the display.
 * @param sSentence sentence to display.
 */
function nthSentences2(iNth, sSentence) {
    for (var iPos = 1; iPos <= iNth; iPos++) {
        document.write('<p>' + sSentence + '</p>');
    }
}


/**
 * Display a sentence nth times.
 *
 * @param iNth will repeat nth times the display.
 * @param sSentence sentence to display.
 */
function nthSentencesBonus(iNth, sSentence) {
    if (iNth > 0) {
        // 1ere phrase
        document.write('<h1>' + sSentence + '</h1>');
        iNth--;
    }

    if (iNth > 0) {
        // 2 et 3eme phrases
        for (var iTwoToThreePosition = 1; iTwoToThreePosition <= 2 && iNth > 0; iTwoToThreePosition++) {
            document.write('<h2>' + sSentence + '</h2>');
            iNth--;
        }

    }

    if (iNth > 0) {
        // 4 à 10
        for (var iFourToTenPosition = 1; iFourToTenPosition <= (10 - 4) && iNth > 0; iFourToTenPosition++) {
            document.write('<p>' + sSentence + '</p>');
            iNth--;
        }
    }

    if (iNth > 0) {
        // les autres
        document.write('<ol>');
        while (iNth > 0) {
            document.write('<li>' + sSentence + '</li>');
            iNth--;
        }
        document.write('</ol>');
    }
}