/*********************/
/****** Partie 1 *****/
/*********************/
document.write('<h2>Partie 1</h2>');
document.write('<ol>');
document.write('<li>' + getRandomNumberBetweenOneAndAHundred() + '</li>');
document.write('<li>' + getRandomNumberBetweenOneAndAHundred() + '</li>');
document.write('<li>' + getRandomNumberBetweenOneAndAHundred() + '</li>');
document.write('<li>' + getRandomNumberBetweenOneAndAHundred() + '</li>');
document.write('</ol>');


/*********************/
/****** Partie 2 *****/
/*********************/
document.write('<h2>Partie 2</h2>');
document.write('<p>2 Nombres générés : [' + getSeveralRandomNumbers(2) + ']</p>');
document.write('<p>4 Nombres générés : [' + getSeveralRandomNumbers(4) + ']</p>');
document.write('<p>9 Nombres générés : [' + getSeveralRandomNumbers(9) + ']</p>');


/*********************/
/****** Partie 3 *****/
/*********************/
document.write('<h2>Partie 3</h2>');
document.write('<ul>');
var aRandomNumbers = getSeveralRandomNumbers(9);
for (var iPos = 0; iPos < aRandomNumbers.length; iPos++) {
    document.write('<li>' + aRandomNumbers[iPos] + '</li>');
}
document.write('</ul>');


/*********************/
/******   BONUS  *****/
/*********************/
document.write('<h1>Bonus</h1>');

document.write('<h2>Bonus 1</h2>');
document.write('<p>2 Nombres générés : ' + getBonusSeveralRandomNumbers(1) + '</p>');
document.write('<p>4 Nombres générés : ' + getBonusSeveralRandomNumbers(2) + '</p>');
document.write('<p>9 Nombres générés : ' + getBonusSeveralRandomNumbers(3) + '</p>');

document.write('<h2>Bonus 3</h2>');
document.write('<p>' + getCustomRandomNumberBetweenOneAndAHundred() + '</p>');