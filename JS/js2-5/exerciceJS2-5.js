/**
 * Affiche 31 fois une case <li>
 */

document.write('<ul>');
for (var iCasePosition = 1; iCasePosition <= 31; iCasePosition++) {
    document.write('<li>case n°' + iCasePosition + '</li>');
}
document.write('</ul>');


/**
 BONUS
 */
document.write('<ul>');
// titres
document.write('<li>');
document.write('<ul>');
document.write('<li>X</li>');
document.write('<li>Y</li>');
document.write('<li>Z</li>');
document.write('</ul>');
document.write('</li>');
for (iCasePosition = 1; iCasePosition <= 23; iCasePosition++) {
    document.write('<li>');
    document.write('<ul>');
    document.write('<li>X' + iCasePosition + '</li>');
    document.write('<li>Y' + iCasePosition + '</li>');
    document.write('<li>Z' + iCasePosition + '</li>');
    document.write('</ul>');
    document.write('</li>');
}
document.write('</ul>');