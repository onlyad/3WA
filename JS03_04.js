/**
 * Created by Dung on 2015-05-27.
 */

var aiResult1 = [];
var aiResult2 = [];
var aiResult3 = [];
var aiMultiplicationTable4 = [];
var iCounter, iCountCol, iCountRow;
var iNumber7 = 7;
var iNumber;
var iSumCol = 0, iSumRow = 0;
var iValMax, iValMin;

/**
* Partie 1: Afficher la table de multiplication de 7
* Calcul.
 */
for ( iCounter = 0 ; iCounter <=  10; iCounter++){
    aiResult1 [iCounter] = iNumber7 * iCounter;
}

// Affichage
document.write("<table border ='1' width='120'>");
for (iCounter = 0; iCounter <= 10; iCounter++) {
    document.write(
                    "<tr>" +
                        "<td>" + iCounter + " x " + iNumber7 + " = </td>" +
                        "<td>" + aiResult1[iCounter] + "</td>" +
                    "</tr>");
}
   document.write("</table><br>");

/**
 * Partie 2: Demander un nombre entier positif, et afficher sa table de multiplication de 0 à 10
 */
 //Calcul.

iNumber = parseInt(prompt("Please enter a number: "));
for ( iCounter = 0 ; iCounter <=  10; iCounter++){
    aiResult2 [iCounter] = iNumber * iCounter;
}

document.write("<table border ='1' width='120'>");

// Partie 2: Demander un nombre entier positif, et afficher sa table de multiplication de 0 à 10
// Affichage.
for (iCounter = 0; iCounter <= 10; iCounter++) {
    document.write(
    "<tr>" +
        "<td >" + iCounter + " x " + iNumber + " = </td>" +
        "<td>" + aiResult2[iCounter] + "</td>" +
    "</tr>");
}
document.write("</table>");
/**
// Partie 3: Affichage de la table complète de multiplications (0 à 10)
//Calcul
*/
 for (iCountRow = 0; iCountRow <= 10; iCountRow++ ) {
    aiResult3[iCountRow] = [];
    for (iCountCol = 0; iCountCol <= 10; iCountCol++) {
        aiResult3 [iCountRow][iCountCol] =  iCountRow * iCountCol;
        //document.write("<br> Row value :" + iCountRow + " x Col value " + iCountCol + " = " +
        //aiResult3[iCountRow][iCountCol]);

    }
}
// Affichage.
document.write("<table border ='1' width='120'>" +
                "<tr>" +
                    "<th>   </th>" +
                    "<th> 0 </th>" +
                    "<th> 1 </th>" +
                    "<th> 2 </th>" +
                    "<th> 3 </th>" +
                    "<th> 4 </th>" +
                    "<th> 5 </th>" +
                    "<th> 6 </th>" +
                    "<th> 7 </th>" +
                    "<th> 8 </th>" +
                    "<th> 9 </th>" +
                    "<th> 10 </th>"
);

for (iCountRow = 0; iCountRow <= 10; iCountRow++ ) {
    document.write("<tr>" +
                    "<td><strong>" + iCountRow + "</strong></td>");
    for (iCountCol = 0; iCountCol <= 10; iCountCol++) {
        document.write(
                            "<td>" + aiResult3[iCountRow][iCountCol] +  "</td>");

    }
    document.write("</tr>");
}
document.write("</table>");
/**
* Bonus 1: Demander à l'utilisateur les intervalles à afficher pour la table de multiplication.
*/
iValMin = parseInt(prompt("Please enter min value: "));
iValMax = parseInt(prompt("Please enter max value: "));

for (iCountRow = iValMin; iCountRow <= iValMax; iCountRow++) {
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
document.write("   <tr>");
document.write("   <th>");
document.write("   </th>");
for (iCounter = 0; iCounter <= 10; iCounter++){
    document.write("   <th>");
    document.write(        iCounter);
    document.write("   </th>");
}
document.write("       <th> Sum </th>");
document.write("   </tr>");

for (iCountRow = iValMin; iCountRow <= iValMax; iCountRow++) {
    document.write("  <tr>");
    document.write("    <th>");
    document.write(        iCountRow);
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
document.write("  <tr>");
document.write("    <th> Sum</th>");

for (iCountCol = 0; iCountCol <= 10; iCountCol++){
    iSumCol = 0;
    for (iCountRow = iValMin; iCountRow <= iValMax; iCountRow++) {
        iSumCol += aiMultiplicationTable4 [iCountRow][iCountCol];
    }
    document.write("  <td>");
    document.write(       iSumCol);
    document.write("  </td>");
}
document.write("  </tr>");


document.write("</table>");

/**
 * Bonus 2: Autoriser aussi votre utilisateur à choisir ses étapes.
 * On doit pouvoir avoir une table de 100 à 1000 de 50 en 50.
 * Bonus 3: Ajouter en fin de votre tableau de multiplication, la somme de chacune des colonnes, et des lignes
 */


var iMultiplicationColumnStep;
var iMultiplicationColumnMin, iMultiplicationColumnMax;
var iMultiplicationTableRowMin, iMultiplicationTableRowMax;

iMultiplicationColumnMin = parseInt(prompt("Min column value for the table of Multiplication"));
iMultiplicationColumnMax = parseInt(prompt("Max column value for the table of Multiplication"));
iMultiplicationColumnStep = parseInt(prompt("Step value for the column of table of Multiplication"));

iMultiplicationTableRowMin = parseInt(prompt("Min Number for the table row of Multiplication"));
iMultiplicationTableRowMax = parseInt(prompt("Max Number for the table row of Multiplication"));



for (iCountRow = iMultiplicationTableRowMin; iCountRow <= iMultiplicationTableRowMax; iCountRow++) {
    aiMultiplicationTable4 [iCountRow] = [];
    for (iCountCol = iMultiplicationColumnMin; iCountCol <= iMultiplicationColumnMax; iCountCol+= iMultiplicationColumnStep) {
        aiMultiplicationTable4 [iCountRow][iCountCol] = iCountRow * iCountCol;

        //document.write("<br> Row value :" + iCountRow + " x Col value " + iCountCol + " = " +
        //aiMultiplicationTable4[iCountRow][iCountCol]);
    }
}



document.write("<h1> Multiplication Table according to user Column Min and Max and Multiplication Step and Row" +
".</h1>");
document.write("<table border='1'>");
document.write("   <tr>");
document.write("   <th>");
document.write("   </th>");

for (iCountCol = iMultiplicationColumnMin; iCountCol <= iMultiplicationColumnMax; iCountCol += iMultiplicationColumnStep){
    document.write("   <th>");
    document.write(        iCountCol);
    document.write("   </th>");
}
document.write("       <th> Sum </th>");
document.write("   </tr>");

for (iCountRow = iMultiplicationTableRowMin; iCountRow <= iMultiplicationTableRowMax; iCountRow++) {
    document.write("  <tr>");
    document.write("    <th>");
    document.write(        iCountRow);
    document.write("    </th>");
    iSumRow = 0;
    for (iCountCol = iMultiplicationColumnMin; iCountCol <= iMultiplicationColumnMax; iCountCol += iMultiplicationColumnStep){
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
document.write("  <tr>");
document.write("    <th> Sum</th>");

for (iCountCol = iMultiplicationColumnMin; iCountCol <= iMultiplicationColumnMax; iCountCol += iMultiplicationColumnStep){
    iSumCol = 0;
    for (iCountRow = iMultiplicationTableRowMin; iCountRow <= iMultiplicationTableRowMax; iCountRow ++) {
        iSumCol += aiMultiplicationTable4 [iCountRow][iCountCol];
    }
    document.write("  <th>");
    document.write(       iSumCol);
    document.write("  </th>");
}
document.write("  </tr>");


document.write("</table>");

