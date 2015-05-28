/**
 * Created by Dung on 2015-05-27.
 */

var aiResult1 = [];
var aiResult2 = [];
var aiResult3 = [];
var aiResult4 = [];
var iCounter, iCounterCol, iCounterRow;
var iNumber7 = 7;
var iNumber;
var iSumCol = 0, iSumRow = 0;
var iValMax, iValMin;

// Partie 1: Afficher la table de multiplication de 7
// Calcul.
for ( iCounter = 0 ; iCounter <=  10; iCounter++){
    aiResult1 [iCounter] = iNumber7 * iCounter;
}
// Partie 1: Afficher la table de multiplication de 7
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


// Partie 2: Demander un nombre entier positif, et afficher sa table de multiplication de 0 à 10
// Calcul.
iNumber = parseInt(prompt("Please enter a number: "));
for ( iCounter = 0 ; iCounter <=  10; iCounter++){
    aiResult2 [iCounter] = iNumber * iCounter;
}
document.write("<table border ='1'width='120'>");
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

// Partie 3: Affichage de la table complète de multiplications (0 à 10)
//Calcul
for (iCounterRow = 0; iCounterRow <= 10; iCounterRow++ ) {
    aiResult3[iCounterRow] = [];
    for (iCounterCol = 0; iCounterCol <= 10; iCounterCol++) {
        aiResult3 [iCounterRow][iCounterCol] =  iCounterRow * iCounterCol;
        document.write("<br> Row value :" + iCounterRow + " x Col value " + iCounterCol + " = " +
        aiResult3[iCounterRow][iCounterCol]);

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

for (iCounterRow = 0; iCounterRow <= 10; iCounterRow++ ) {
    document.write("<tr>" +
                    "<td><strong>" + iCounterRow + "</strong></td>");
    for (iCounterCol = 0; iCounterCol <= 10; iCounterCol++) {
        document.write(
                            "<td>" + aiResult3[iCounterRow][iCounterCol] +  "</td>");

    }
    document.write("</tr>");
}
document.write("</table>");

// Bonus 1: Demander à l'utilisateur les intervalles à afficher pour la table de multiplication.

iValMin = parseInt(prompt("Please enter min value: "));
iValMax = parseInt(prompt("Please enter max value: "));

for (iCounterRow = iValMin; iCounterRow <= iValMax; iCounterRow++) {
    aiResult4 [iCounterRow] = [];
    iSumRow = 0;
    for (iCounterCol = 0; iCounterCol <= 10; iCounterCol++) {
        aiResult4 [iCounterRow][iCounterCol] = iCounterRow * iCounterCol;
        iSumRow += aiResult4 [iCounterRow][iCounterCol];

        //document.write("<br> Row value :" + iCounterRow + " x Col value " + iCounterCol + " = " +
        //aiResult4[iCounterRow][iCounterCol]);
    }
    aiResult4 [iCounterRow][iCounterCol] = iSumRow;
}
var iAddRow = aiResult4.length ;
aiResult4 [iAddRow] = [];
for (iCounterCol = iValMin; iCounterCol <= iValMax; iCounterCol++ ){
    iSumCol = 0;
    for (iCounterRow = 1; iCounterRow <= 10; iCounterRow++) {
        iSumCol += aiResult4 [iCounterRow][iCounterCol];

    }
    aiResult4 [iCounterRow ][iCounterCol] = iSumCol;
}

// Bonus 1: Demander à l'utilisateur les intervalles à afficher pour la table de multiplication. Affichage des valeurs

document.write("<table border='1 '>" +
                "<tr>" +
                    "<th> </th> ");
for (iCounter = 0; iCounter <= 10; iCounter++) {
    document.write("<th>" + iCounter + "</th>");
}
document.write("<th> Sum </th>" +
              "</tr>");

for (iCounterRow = iValMin; iCounterRow <= iValMax ; iCounterRow++){
    document.write("<tr> <td><strong>" + iCounterRow  +  "</strong>  </td>");
    for (iCounterCol = 0; iCounterCol <= 11; iCounterCol++) {
        document.write (
                            "<td>" + aiResult4 [iCounterRow][iCounterCol] + "</td>");

    }
    document.write ("</tr>");
}
document.write("</table>");
