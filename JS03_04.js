/**
 * Created by Dung on 2015-05-27.
 */

const iMAX_MULTIPLICATION_NUMBER = 10;
const iNUMBER_2_DISPLAY_MULTIPLICATION = 7;

var aiMultiplicationTableFor7 = [];
var aiMultiplicationTable2 = [];
var aiMultiplicationTable3 = [];
var aiMultiplicationTable4 = [];
var iCounter, iCountCol, iCountRow;

var iNumber;
var iSumCol = 0, iSumRow = 0;
var iRowValMax, iRowValMin;

/**
* Partie 1: Afficher la table de multiplication de 7
* Calcul.
 */
for ( iCounter = 0 ; iCounter <=  iMAX_MULTIPLICATION_NUMBER; iCounter++){
    aiMultiplicationTableFor7 [iCounter] = iNUMBER_2_DISPLAY_MULTIPLICATION * iCounter;
}

// Affichage
document.write("<h2> Multiplication table for Number 7 </h2>");
document.write("<table border ='1' width='120'>");
for (iCounter = 0; iCounter <= 10; iCounter++) {
    document.write(
                    "<tr>" +
                        "<td>" + iCounter + " x " + iNUMBER_2_DISPLAY_MULTIPLICATION + " = </td>" +
                        "<td>" + aiMultiplicationTableFor7[iCounter] + "</td>" +
                    "</tr>");
}
   document.write("</table><br>");

/**
 * Partie 2: Demander un nombre entier positif, et afficher sa table de multiplication de 0 à 10
 */
 //Calcul.

do {
    iNumber = (prompt("Please enter a number > 0 "));
} while (isNaN(iNumber) || parseInt(iNumber) < 0 );
iNumber = parseInt(iNumber);

    for ( iCounter = 0 ; iCounter <=  iMAX_MULTIPLICATION_NUMBER; iCounter++){
    aiMultiplicationTable2 [iCounter] = iNumber * iCounter;
}

document.write("<table border ='1' width='120'>");

// Partie 2: Demander un nombre entier positif, et afficher sa table de multiplication de 0 à 10
// Affichage.
for (iCounter = 0; iCounter <= iMAX_MULTIPLICATION_NUMBER; iCounter++) {
    document.write(
    "<tr>" +
        "<td >" + iCounter + " x " + iNumber + " = </td>" +
        "<td>" + aiMultiplicationTable2[iCounter] + "</td>" +
    "</tr>");
}
document.write("</table>");
/**
// Partie 3: Affichage de la table complète de multiplications (0 à 10)
//Calcul
*/
 for (iCountRow = 0; iCountRow <= iMAX_MULTIPLICATION_NUMBER; iCountRow++ ) {
    aiMultiplicationTable3[iCountRow] = [];
    for (iCountCol = 0; iCountCol <= iMAX_MULTIPLICATION_NUMBER; iCountCol++) {
        aiMultiplicationTable3 [iCountRow][iCountCol] =  iCountRow * iCountCol;
        //document.write("<br> Row value :" + iCountRow + " x Col value " + iCountCol + " = " +
        //aiMultiplicationTable3[iCountRow][iCountCol]);

    }
}
// Affichage.
document.write("<h2> Complete Multiplication table from 0 to 10.</h2>");
document.write("<table border ='1' width='120'>");
document.write("<thead>");
document.write("   <tr>");
document.write("       <th>&nbsp;</th>");
// Affichage des intervalles de 0 jusqu'au taille des colonnes.
for (iCountCol = 0; iCountCol <= iMAX_MULTIPLICATION_NUMBER; iCountCol++) {
    document.write( "<th>" + iCountCol + "</th>");

}
document.write("   </tr>");
document.write("</thead>");

// Affichage de la ligne
for (iCountRow = 0; iCountRow <= iMAX_MULTIPLICATION_NUMBER; iCountRow++ ) {
    document.write("<tr>" +
                    "<td>" + iCountRow + "</td>");
    for (iCountCol = 0; iCountCol <= 10; iCountCol++) {
        document.write(
                            "<td>" + aiMultiplicationTable3[iCountRow][iCountCol] +  "</td>");

    }
    document.write("</tr>");
}
document.write("</table>");
/**
* Bonus 1: Demander à l'utilisateur les intervalles à afficher pour la table de multiplication.
*/
do {
    iRowValMin = (prompt("Please enter min value for the row > 0 "));
} while (isNaN(iRowValMin) || parseInt(iRowValMin) < 0);
iRowValMin = parseInt(iRowValMin);

do {
    iRowValMax = parseInt(prompt("Please enter max value for the row > 0 "));
} while (isNaN(iRowValMax) || parseInt(iRowValMax) < 0);
iRowValMax = parseInt(iRowValMax);

for (iCountRow = iRowValMin; iCountRow <= iRowValMax; iCountRow++) {
    aiMultiplicationTable4 [iCountRow] = [];
    for (iCountCol = 0; iCountCol <= 10; iCountCol++) {
        aiMultiplicationTable4 [iCountRow][iCountCol] = iCountRow * iCountCol;

        //document.write("<br> Row value :" + iCountRow + " x Col value " + iCountCol + " = " +
        //aiMultiplicationTable4[iCountRow][iCountCol]);
    }
}

// Bonus 1:  Affichage des valeurs. Affichage la somme des lignes et des colonnes.

document.write("<h1> Multiplication Table according to user Min and Max.</h1>");
document.write("<table border='1'>");
document.write("<thead>");
document.write("   <tr>");
document.write("      <th>&nbsp;</th>");
for (iCounter = 0; iCounter <= 10; iCounter++){
    document.write("   <th>");
    document.write(        iCounter);
    document.write("   </th>");
}
document.write("       <th> Sum </th>");
document.write("   </tr>");
document.write("</thead>");
document.write("<tbody>");
for (iCountRow = iRowValMin; iCountRow <= iRowValMax; iCountRow++) {
    document.write("  <tr>");
    document.write("    <th>");
    document.write(        iCountRow); // Affichage de la ligne
    document.write("    </th>");
    iSumRow = 0;
    for (iCountCol = 0; iCountCol <= 10; iCountCol++){
        document.write("  <td>");
        document.write(aiMultiplicationTable4 [iCountRow][iCountCol]);
        document.write("  </td>");
        iSumRow += aiMultiplicationTable4 [iCountRow][iCountCol];
    }
    document.write("     <td>");
    document.write(         iSumRow);
    document.write("     </td>");
    document.write("  </tr>");
}

document.write("</tbody>");
document.write("<tfoot>");
document.write("  <tr>");
document.write("    <th> Sum</th>");

for (iCountCol = 0; iCountCol <= iMAX_MULTIPLICATION_NUMBER; iCountCol++){
    iSumCol = 0;
    for (iCountRow = iRowValMin; iCountRow <= iRowValMax; iCountRow++) {
        iSumCol += aiMultiplicationTable4 [iCountRow][iCountCol];
    }
    document.write("  <td>");
    document.write(       iSumCol);
    document.write("  </td>");
}
document.write("  </tr>");
document.write("</tfoot>");
document.write("</table>");

/**
 * Bonus 2: Autoriser aussi votre utilisateur à choisir ses étapes.
 * On doit pouvoir avoir une table de 100 à 1000 de 50 en 50.
 * Bonus 3: Ajouter en fin de votre tableau de multiplication, la somme de chacune des colonnes, et des lignes
 */

var iMultiplicationTableColumnStep;
var iMultiplicationTableColumnMin, iMultiplicationTableColumnMax;
var iMultiplicationTableRowMin, iMultiplicationTableRowMax;

iMultiplicationTableColumnMin = parseInt(prompt("Min column value for the table of Multiplication"));
iMultiplicationTableColumnMax = parseInt(prompt("Max column value for the table of Multiplication"));
iMultiplicationTableColumnStep = parseInt(prompt("Step value for the column of table of Multiplication"));

iMultiplicationTableRowMin = parseInt(prompt("Min Number for the table row of Multiplication"));
iMultiplicationTableRowMax = parseInt(prompt("Max Number for the table row of Multiplication"));



for (iCountRow = iMultiplicationTableRowMin; iCountRow <= iMultiplicationTableRowMax; iCountRow++) {
    aiMultiplicationTable4 [iCountRow] = [];
    for (iCountCol = iMultiplicationTableColumnMin; iCountCol <= iMultiplicationTableColumnMax; iCountCol+= iMultiplicationTableColumnStep) {
        aiMultiplicationTable4 [iCountRow][iCountCol] = iCountRow * iCountCol;

        //document.write("<br> Row value :" + iCountRow + " x Col value " + iCountCol + " = " +
        //aiMultiplicationTable4[iCountRow][iCountCol]);
    }
}



document.write("<h1> Multiplication Table according to user Column Min and Max and Multiplication Step and Row" +
".</h1>");
document.write("<table border='1'>");
document.write("<thead>");
document.write("   <tr>");
document.write("   <th>&nbsp;</th>");

for (iCountCol = iMultiplicationTableColumnMin; iCountCol <= iMultiplicationTableColumnMax; iCountCol += iMultiplicationTableColumnStep){
    document.write("   <th>");
    document.write(        iCountCol);
    document.write("   </th>");
}
document.write("       <th> Sum </th>");
document.write("   </tr>");
document.write("</thead>");

document.write("<tbody>");
for (iCountRow = iMultiplicationTableRowMin; iCountRow <= iMultiplicationTableRowMax; iCountRow++) {
    document.write("  <tr>");
    document.write("    <th>");
    document.write(        iCountRow);
    document.write("    </th>");
    iSumRow = 0;
    for (iCountCol = iMultiplicationTableColumnMin; iCountCol <= iMultiplicationTableColumnMax; iCountCol += iMultiplicationTableColumnStep){
        document.write("  <td>");
        document.write(aiMultiplicationTable4 [iCountRow][iCountCol]);
        document.write("  </td>");
        iSumRow += aiMultiplicationTable4 [iCountRow][iCountCol];
    }
    document.write("     <th>");
    document.write(         iSumRow);
    document.write("     </th>");
    document.write("  </tr>");
}
document.write(" </tbody>");
document.write(" <tfoot>");
document.write("  <tr>");
document.write("    <th> SumRow</th>");

for (iCountCol = iMultiplicationTableColumnMin; iCountCol <= iMultiplicationTableColumnMax; iCountCol += iMultiplicationTableColumnStep){
    iSumCol = 0;
    for (iCountRow = iMultiplicationTableRowMin; iCountRow <= iMultiplicationTableRowMax; iCountRow ++) {
        iSumCol += aiMultiplicationTable4 [iCountRow][iCountCol];
    }
    document.write("  <th>");
    document.write(       iSumCol);
    document.write("  </th>");
}
document.write("  </tr>");

document.write(" </tfoot>");
document.write("</table>");

