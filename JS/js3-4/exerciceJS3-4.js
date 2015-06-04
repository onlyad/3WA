/***************************************************************
 * 1ere étape
 ***************************************************************
 * Affichage de la table de multiplication de 7
 **************************************************************/


// déclaration de mes constantes
const NUMBER_TO_DISPLAY_MULTIPLICATION = 7;
const MAX_MULTIPLICATION_NUMBER = 10;
// déclaration de mes variables
var iNumberZeroToMax;
var aMultiplicationTable;


// création de chaque case du tableau
aMultiplicationTable = [];
for (iNumberZeroToMax = 0; iNumberZeroToMax <= MAX_MULTIPLICATION_NUMBER; iNumberZeroToMax++) {
    aMultiplicationTable[iNumberZeroToMax] = iNumberZeroToMax * NUMBER_TO_DISPLAY_MULTIPLICATION;
}

// affichage de la table de 7
document.write('<h2>Table de ' + NUMBER_TO_DISPLAY_MULTIPLICATION + ' :</h2>');
document.write('<table>');
// on parcours chaque valeur du tableau
for (iNumberZeroToMax = 0; iNumberZeroToMax < aMultiplicationTable.length; iNumberZeroToMax++) {
    document.write('<tr>');
    document.write('  <td>' + iNumberZeroToMax + ' x ' + NUMBER_TO_DISPLAY_MULTIPLICATION + '</td>');
    document.write('  <td> = ' + aMultiplicationTable[iNumberZeroToMax] + '</td>');
    document.write('</tr>');
}
document.write('</table>');


/***************************************************************
 * 2eme étape
 ***************************************************************
 * Saisie d'un nombre et affichage de sa table de multiplication
 **************************************************************/

var iMultiplicationTableNumber;
do {
    iMultiplicationTableNumber = prompt('Choisissez un nombre entier positif ( > 0 ) :');
    // deux conditions : on doit avoir un nombre ET on ce nombre doit être plus grand que 1
} while (isNaN(iMultiplicationTableNumber) || parseInt(iMultiplicationTableNumber) < 0);
iMultiplicationTableNumber = parseInt(iMultiplicationTableNumber);

// création de chaque case du tableau
aMultiplicationTable = [];
for (iNumberZeroToMax = 0; iNumberZeroToMax <= MAX_MULTIPLICATION_NUMBER; iNumberZeroToMax++) {
    aMultiplicationTable[iNumberZeroToMax] = iNumberZeroToMax * iMultiplicationTableNumber;
    // exemple : tableau [ 2 ] = 2 * nombre
}

// affichage
document.write('<h2>Table de ' + iMultiplicationTableNumber + ' :</h2>');
document.write('<table>');
// on parcours chaque valeur du tableau
for (iNumberZeroToMax = 0; iNumberZeroToMax < aMultiplicationTable.length; iNumberZeroToMax++) {
    document.write('<tr>');
    document.write('  <td>' + iNumberZeroToMax + ' x ' + iMultiplicationTableNumber + '</td>');
    document.write('  <td> = ' + aMultiplicationTable[iNumberZeroToMax] + '</td>');
    document.write('</tr>');
}
document.write('</table>');


/***************************************************
 * 3eme étape
 ***************************************************
 * Affichage de la table complète de multiplications
 **************************************************/
const MAX_LINE_MULTIPLICATION = 10;
const MAX_COLUMN_MULTIPLICATION = 20;
var iPos, iPosLine, iPosColumn; // positions pour les boucles for

// réinitialisation du tableau
aMultiplicationTable = [];
// création des lignes
for (iPosLine = 0; iPosLine <= MAX_LINE_MULTIPLICATION; iPosLine++) {
    aMultiplicationTable[iPosLine] = []; // chaque ligne contient un nouveau tableau
    // création des colonnes : valeurs de chaque sous tableau
    for (iPosColumn = 0; iPosColumn <= MAX_COLUMN_MULTIPLICATION; iPosColumn++) {
        aMultiplicationTable[iPosLine][iPosColumn] = iPosColumn * iPosLine;
    }
}


// affichage
document.write('<h2>Tableau de multiplication</h2>');
document.write('<table border="1">');
document.write('<thead><tr><th>&nbsp;</th>');

// affichage des intervalles : de 0 jusqu'à la taille des colonnes
for (iPos = 0; iPos < aMultiplicationTable[0].length; iPos++) {
    document.write('<th>' + iPos + '</th>');
}

document.write('</tr></thead>');


// boucle de 0 jusqu'à la taille du tableau niveau 1
for (iPosLine = 0; iPosLine < aMultiplicationTable.length; iPosLine++) {
    document.write('<tr>');
    document.write('<th>' + iPosLine + '</th>'); // affichage de la ligne

    // boucle de 0 jusqu'à la taille du second tableau
    for (iPosColumn = 0; iPosColumn < aMultiplicationTable[iPosLine].length; iPosColumn++) {
        document.write('<td>' + aMultiplicationTable[iPosLine][iPosColumn] + '</td>');
    }

    document.write('</tr>');
}
document.write('</table>');


/***************************************************
 * BONUS 3
 ***************************************************
 * Calculs des sommes des colonnes et des lignes
 **************************************************/

var iColumnSum, iLineSum, iCurrentValue;

document.write('<h2>Tableau de multiplication</h2>');
document.write('<table border="1">');
document.write('<thead><tr><th>&nbsp;</th>');

// affichage des intervalles : de 0 jusqu'à la taille des colonnes
for (iPos = 0; iPos < aMultiplicationTable[0].length; iPos++) {
    document.write('<th>' + iPos + '</th>');
}

document.write('<th>Somme</th>');
document.write('</tr></thead>');

document.write('<tbody>');
// boucle de 0 jusqu'à la taille du tableau niveau 1
for (iPosLine = 0; iPosLine < aMultiplicationTable.length; iPosLine++) {
    iColumnSum = 0;

    document.write('<tr>');
    document.write('<th>' + iPosLine + '</th>'); // affichage de la ligne

    // boucle de 0 jusqu'à la taille du second tableau
    for (iPosColumn = 0; iPosColumn < aMultiplicationTable[iPosLine].length; iPosColumn++) {
        iCurrentValue = aMultiplicationTable[iPosLine][iPosColumn];
        iColumnSum += iCurrentValue;

        document.write('<td>' + iCurrentValue + '</td>');
    }

    // Somme des colonnes
    document.write('<th>' + iColumnSum + '</th>');

    document.write('</tr>');
}
document.write('</tbody>');
document.write('<tfoot>');

document.write('<tr><th>Somme</th>');
for (iPosColumn = 0; iPosColumn <= MAX_COLUMN_MULTIPLICATION; iPosColumn++) {
    iLineSum = 0;

    for (iPosLine = 0; iPosLine < MAX_LINE_MULTIPLICATION; iPosLine++) {
        iCurrentValue = aMultiplicationTable[iPosLine][iPosColumn];
        iLineSum += iCurrentValue;
    }

    // Somme des colonnes
    document.write('<th>' + iLineSum + '</th>');
}
document.write('</tr>');
document.write('</tfoot>');

document.write('</table>');