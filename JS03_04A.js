/**
 * Created by Dung on 2015-06-01.
 */

/** Multiplication Table for Number 7
 *
 */
const iMAX_MULTIPLICATION_RANGE = 10;
const iMULTIPLICATION_NUMBER = 7;

var aiMultiplicationTableFor7 = [];

// Calculate
for (iMultiplicationFrom0ToMax = 0; iMultiplicationFrom0ToMax <= iMAX_MULTIPLICATION_RANGE; iMultiplicationFrom0ToMax++){
    aiMultiplicationTableFor7 [iMultiplicationFrom0ToMax] = iMULTIPLICATION_NUMBER * iMultiplicationFrom0ToMax;
}

// Display in table
document.write("<h1> Mutliplication Table for Number 7: </h1>");
document.write("<table border = '1'>");
for (iMultiplicationFrom0ToMax = 0; iMultiplicationFrom0ToMax <= iMAX_MULTIPLICATION_RANGE; iMultiplicationFrom0ToMax++){
    document.write("<tr>");
    document.write("<td>" + iMULTIPLICATION_NUMBER + " x " + iMultiplicationFrom0ToMax + " = " + "</td>" );
    document.write("<td>" + aiMultiplicationTableFor7[iMultiplicationFrom0ToMax] + "</td>" );
    document.write("</tr>");
}
document.write("</table>");

/** Multiplication Table for Number Specify by user
 *
 */
var aiMultiplicationTable = [];

iNumber2bUsedInMultiplicationTable = parseInt(prompt("Please enter a number to be used in Multiplication Table"));

// Calculate
for (iMultiplicationFrom0ToMax = 0; iMultiplicationFrom0ToMax <= iMAX_MULTIPLICATION_RANGE; iMultiplicationFrom0ToMax++){
    aiMultiplicationTable [iMultiplicationFrom0ToMax] = iNumber2bUsedInMultiplicationTable * iMultiplicationFrom0ToMax;
}

// Display in table
document.write("<h1>Mutliplication Table for Number :" + iNumber2bUsedInMultiplicationTable + " </h1>");
document.write("<table border = '1'>");
for (iMultiplicationFrom0ToMax = 0; iMultiplicationFrom0ToMax <= iMAX_MULTIPLICATION_RANGE; iMultiplicationFrom0ToMax++){
    document.write("<tr>");
    document.write("<td>" + iNumber2bUsedInMultiplicationTable + " x " + iMultiplicationFrom0ToMax + " = " + "</td>" );
    document.write("<td>" + aiMultiplicationTable[iMultiplicationFrom0ToMax] + "</td>" );
    document.write("</tr>");
}
document.write("</table>");

/**
 * Calculate & Display the whole set of Multiplication Table from 1 to 10.
 *
 */
//Calculate
for (iRow = 0; iRow <= iMAX_MULTIPLICATION_RANGE ; iRow++){
    aiMultiplicationTable[iRow]= [];
    for (iCol = 0; iCol <= iMAX_MULTIPLICATION_RANGE; iCol++){
        aiMultiplicationTable [iRow][iCol] = iRow * iCol;
    }
}

// Display in table html
document.write("<h1>Mutliplication Table for 0 -10 </h1>");
document.write("<table border = '1'>");
document.write("<thead><tr><th>&nbsp;</th>");
//Display the row heading
for (iRow = 0; iRow <= iMAX_MULTIPLICATION_RANGE; iRow++) {
    document.write("<th>" + iRow + "</th>");
}
document.write("</tr></thead>");
document.write("<tbody>");

for (iRow = 0; iRow <= iMAX_MULTIPLICATION_RANGE ; iRow++){
    document.write("<tr> <th>" + iRow + "</th>");
    for (iCol = 0; iCol <= iMAX_MULTIPLICATION_RANGE; iCol++){
        document.write("<td>" + aiMultiplicationTable [iRow][iCol] + "</td>");
    }
    document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");

/**
 * Bonus 2: Autoriser aussi votre utilisateur à choisir ses étapes.
 * On doit pouvoir avoir une table de 100 à 1000 de 50 en 50.
 * Bonus 3: Ajouter en fin de votre tableau de multiplication, la somme de chacune des colonnes, et des lignes
 */

var iMultiplicationColumnMin;
var iMultiplicationColumnMax;
var iMultiplicationColumnStep;
var iMultiplicationRowMax;
var iMultiplicationRowMin;

var iRow, iCol;
var iSumRow, iSumCol;

iMultiplicationColumnMin = parseInt(prompt("Please Enter Multiplication Column Min:"));
iMultiplicationColumnMax = parseInt(prompt("Please Enter Multiplication Column Max:"));
iMultiplicationColumnStep = parseInt(prompt("Please Enter Multiplication Column Step:"));

iMultiplicationRowMin = parseInt(prompt("Please Enter Multiplication Row Min:"));
iMultiplicationRowMax = parseInt(prompt("Please Enter Multiplication Row Max:"));
iMultiplicationRowStep = parseInt(prompt("Please Enter Multiplication Row Step:"));

// Calculate
for (iRow = iMultiplicationRowMin; iRow <= iMultiplicationRowMax; iRow += iMultiplicationRowStep ) {
    aiMultiplicationTable [iRow]= [];
    for (iCol = iMultiplicationColumnMin; iCol <= iMultiplicationColumnMax; iCol += iMultiplicationColumnStep ){
        aiMultiplicationTable [iRow][iCol] = iRow * iCol;
    }
}

// Display Header Row
document.write("<h1>Mutliplication Table for any Range Number </h1>");
document.write("<table border='1'>");
document.write("<thead> <tr>");
document.write("            <th>&nbsp;</th>");
for (iCol = iMultiplicationColumnMin; iCol <= iMultiplicationColumnMax; iCol += iMultiplicationColumnStep ) {
    document.write("<th>" + iCol + "</th>");
}
document.write("<th> SumRow </th>");
document.write(" </tr></thead>");

// Display Body Rows
document.write("<tbody>");
for (iRow = iMultiplicationRowMin; iRow <= iMultiplicationRowMax; iRow += iMultiplicationRowStep ) {
    document.write("<tr> <th>" + iRow + "</th>");
    iSumRow = 0;
    for (iCol = iMultiplicationColumnMin; iCol <= iMultiplicationColumnMax; iCol += iMultiplicationColumnStep ){
        document.write("<td>" + aiMultiplicationTable[iRow][iCol] + "</td>");
        iSumRow += aiMultiplicationTable[iRow][iCol];
    }
    document.write("<th>" + iSumRow + "</th>");
}
document.write("</tbody>");
document.write("<tfoot>");
document.write("<tr> <th> SumCol </th>");

for (iCol = iMultiplicationColumnMin; iCol <= iMultiplicationColumnMax; iCol += iMultiplicationColumnStep ){
    iSumCol = 0;
    for (iRow = iMultiplicationRowMin; iRow <= iMultiplicationRowMax; iRow += iMultiplicationRowStep ) {
        iSumCol += aiMultiplicationTable[iRow][iCol];

    }
    document.write("<th>" + iSumCol + "</th>");
}