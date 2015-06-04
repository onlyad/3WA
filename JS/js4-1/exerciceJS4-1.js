/*********************/
/****** Partie 1 *****/
/*********************/
/*   sans fonction   */
/*********************/
document.write('<h1>Partie 1 - sans fonction</h1>');
document.write('<h2>Avec un pourboire par défaut (15%) :</h2>');
document.write('<table>');
document.write('<thead><tr><th>Prix affiché</th><th>Je paye...</th></tr></thead>');
for (var fNumberWithoutFunction = 5; fNumberWithoutFunction <= 20; fNumberWithoutFunction += .5) {
    document.write('<tr><td>$' + fNumberWithoutFunction + '</td><td>$' + (fNumberWithoutFunction * (100 + TPS + TVQ) / 100 * (100 + 15) / 100) + '</td></tr>');
}
document.write('</table>');


/*********************/
/****** Partie 2 *****/
/*********************/
/* avec une fonction */
/*********************/
document.write('<h1>Partie 2 - avec fonction</h1>');
document.write('<h2>Avec un pourboire par défaut (15%) :</h2>');
document.write('<table>');
document.write('<thead><tr><th>Prix affiché</th><th>Je paye...</th></tr></thead>');
for (var fNumberWithFunction = 5; fNumberWithFunction <= 20; fNumberWithFunction += .5) {
    document.write('<tr><td>$' + fNumberWithFunction + '</td><td>$' + realPriceInRestaurant(fNumberWithFunction) + '</td></tr>');
}
document.write('</table>');


/*********************/
/******* BONUS *******/
/*********************/
document.write('<h1>BONUS</h1>');
displayMatchingRestaurantPrices(11, 18, 20);
displayMatchingRestaurantPrices(20, 30, 35.50);
displayMatchingRestaurantPrices(50, 70, 43);
