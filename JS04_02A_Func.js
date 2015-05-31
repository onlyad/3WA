/**
 * Created by Dung on 2015-05-31.
 */
/**
 * Partie 1 : //Écrire une fonction permettant d'afficher une phrase plusieurs fois. On devra être
 * capable de changer le nombre
 * de phrases à afficher.
 * écrire une nouvelle fonction qui vous permet en plus de personnaliser le phrase à répéter.
 *
 */
function writeSentenceNthTime(sSentence, iNthTime) {
    for (iRepeat = 0; iRepeat < iNthTime; iRepeat++) {
        document.write("<br>" + sSentence);
    }
}

/**
 BONUS
 * Ajouter les conditions suivantes :
 *    la première phrase sera entourée des balises <h1>
 * les 2 et 3ème, des balises <h2>
 * les 4 à 10, balises <p>
 * au delà, balises<li>
 */
function writeSentenceNthWithDifferentTags(sSentence, iNthTime) {
    document.write("<br> Write sentences which repeat " + iNthTime + " times with different Tags");
    if (iNthTime > 0) {
        document.write("<h1>" + sSentence + "</h1>");
        iNthTime--;
    }
    if (iNthTime > 0) {
        for (iRepeat = 1; iRepeat <= 2 && iNthTime > 0; iRepeat++) {
            document.write("<h2>" + sSentence + "</h2>");
            iNthTime--;
        }

    }
    if (iNthTime > 0) {
        for (iRepeat = 1; iRepeat <= (10 - 4) && iNthTime > 0; iRepeat++) {
            document.write("<p>" + sSentence + "</p>");
            iNthTime--;
        }

    }
    if (iNthTime > 0) {
        document.write("<ul>");
        for (iRepeat = 1; iRepeat <= iNthTime && iNthTime > 0; iRepeat++) {
            document.write("<li>" + sSentence + "</li>");
            iNthTime--
        }
        document.write("</ul>");

    }
}

/**
 * Bonus 2: Ecrire une fonction permettant de choisir la position de chaque balises.
 * Les positions seront stockées dans un objet.
 *    Exemple :
 *
 * h1Start = 1, h1End = 1, h2Start = 2, h2End = 3...
 */
//function writeSentenceNthWithDifferentTagsPosition (sSentence, iNthTime) {
//    document.write("<br> Write sentences which repeat "+ iNthTime + " times with different Tags");
//    if (iNthTime > 0) {
//        for (iRepeat = 1; iRepeat <= )
//        document.write("<h1>" + sSentence + "</h1>" );
//        iNthTime--;
//    }
//    if (iNthTime > 0) {
//        for (iRepeat = 1; iRepeat<= 2 && iNthTime > 0; iRepeat++ ) {
//            document.write("<h2>" + sSentence + "</h2>");
//            iNthTime--;
//        }
//
//    }
//    if (iNthTime > 0) {
//        for (iRepeat = 1; iRepeat<= (10 - 4) && iNthTime > 0; iRepeat++ ) {
//            document.write("<p>" + sSentence + "</p>");
//            iNthTime--;
//        }
//
//    }
//    if (iNthTime > 0) {
//        document.write("<ul>");
//        for (iRepeat = 1; iRepeat<= iNthTime && iNthTime > 0; iRepeat++ ) {
//            document.write("<li>" + sSentence + "</li>");
//            iNthTime--
//        }
//        document.write("</ul>");
//        ;
//    }
//}
//

function defineTagsPosition(sTags, iPosStart, iPosEnd, sSentence, iNthTime) {
    var asTags = {h1Start: 1, h1End: 1, h2Start: 2, h2End: 3, pStart: 4, pEnd: 10, liStart: 11};

    switch (sTags) {
        case 'h1':
            asTags.h1Start = iPosStart;
            asTags.h1End = iPosEnd;
            if (iNthTime > 0) {
                for (iRepeat = iPosStart; iRepeat <= iPosEnd && iNthTime > 0; iRepeat++) {
                    document.write("<h1>" + sSentence + "</h1>");
                    iNthTime--;
                }
            }
            if (iNthTime > 0) {
                for (iRepeat = 1; iRepeat <= 2 && iNthTime > 0; iRepeat++) {
                    document.write("<h2>" + sSentence + "</h2>");
                    iNthTime--;
                }

            }
            if (iNthTime > 0) {
                for (iRepeat = 1; iRepeat <= (10 - 4) && iNthTime > 0; iRepeat++) {
                    document.write("<p>" + sSentence + "</p>");
                    iNthTime--;
                }

            }
            if (iNthTime > 0) {
                document.write("<ul>");
                for (iRepeat = 1; iRepeat <= iNthTime && iNthTime > 0; iRepeat++) {
                    document.write("<li>" + sSentence + "</li>");
                    iNthTime--;
                }
                document.write("</ul>");
            }
            break;
        case  "h2":
            asTags.h2Start = iPosStart;
            asTags.h2End = iPosEnd;
            if (iNthTime > 0) {
                document.write("<h1>" + sSentence + "</h1>");
                iNthTime--;
            }
            if (iNthTime > 0) {
                for (iRepeat = iPosStart; iRepeat <= iPosEnd && iNthTime > 0; iRepeat++) {
                    document.write("<h2>" + sSentence + "</h2>");
                    iNthTime--;
                }

            }
            if (iNthTime > 0) {
                for (iRepeat = 1; iRepeat <= (10 - 4) && iNthTime > 0; iRepeat++) {
                    document.write("<p>" + sSentence + "</p>");
                    iNthTime--;
                }

            }
            if (iNthTime > 0) {
                document.write("<ul>");
                for (iRepeat = 1; iRepeat <= iNthTime && iNthTime > 0; iRepeat++) {
                    document.write("<li>" + sSentence + "</li>");
                    iNthTime--;
                }
                document.write("</ul>");

            }

    }
}
