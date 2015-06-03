var iValue;

document.write('<ul>');
for (var iOddNumber = 1; iOddNumber <= 999; iOddNumber += 2) {
    iValue = 0;

    if (iOddNumber / 5 == parseInt(iOddNumber / 5)) {
        // deuxième syntaxe pour les multiples de 5
        //if (iOddNumber % 5 == 0){

        // multiples de 5 en négatif
        iValue = -iOddNumber;
    }
    else if (iOddNumber < 100) {
        // nombres de moins de 100 au carré
        iValue = iOddNumber * iOddNumber;
    } else if (iOddNumber > 300) {
        // tous les autres
        iValue = iOddNumber;
    }

    if (iValue != 0) {
        document.write('<li>');
        document.write('Nombre : ' + iOddNumber);
        document.write(', valeur : ' + iValue);
        document.write('</li>');
    }
}
document.write('</ul>');